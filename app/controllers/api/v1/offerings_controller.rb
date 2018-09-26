module Api::V1
  class OfferingsController < ApplicationController
    def index
      @available_offerings = Offering.all
      render json: @available_offerings
    end
  end
end
