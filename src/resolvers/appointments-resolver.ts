import { Customer } from "./../dtos/models/customer-model";
import { CreateAppointmentInput } from "./../dtos/inputs/create-appointment-input";
import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Appointment } from "../dtos/models/appointment-model";

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startAt: new Date(),
        endAt: new Date(),
      },
    ];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      startAt: data.startsAt,
      endAt: data.endsAt,
    };

    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment);

    return {
      name: "John Doe",
    };
  }
}
