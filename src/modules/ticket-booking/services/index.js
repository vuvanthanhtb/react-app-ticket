import API_METHODS from "utils/api-method";
import apiPath from "./api-path";
import RequestService from "services/request.service";
import {
  CreateTicketBookingModel,
  SearchTicketBookingModel,
  UpdateTicketBookingModel,
} from "./ticket-booking.model";

class TicketBookingService {
  #service = null;

  constructor() {
    this.#service = new RequestService();
  }

  create = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.create,
        data,
        CreateTicketBookingModel,
        API_METHODS.POST
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  update = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.update,
        data,
        UpdateTicketBookingModel,
        API_METHODS.POST
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  delete = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.delete,
        data,
        null,
        API_METHODS.DELETE
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  search = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.search,
        data,
        SearchTicketBookingModel,
        API_METHODS.GET
      );
      return response;
    } catch (error) {
      return error;
    }
  };
}

export default TicketBookingService;
