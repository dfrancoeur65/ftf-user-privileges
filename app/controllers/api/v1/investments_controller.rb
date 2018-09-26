# controller for investments
module Api::V1
  class InvestmentsController < ApplicationController
    def index
      @investments = Investment.all
      render json: @investments
    end

    def create
      @investment = Investment.create(investment_params)
      render json: @investment
    end

    private

    def investment_params
      params.require(:investment).permit(:offering_id, :amount, :user_id)
    end
  end
end
