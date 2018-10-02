# controller for investments
module Api::V1
  class InvestmentsController < ApplicationController
    before_action :set_investment, only: %i[show update destroy]
    def index
      @investments = Investment.all
      render json: @investments, include: [:offering]
    end

    def create
      @investment = Investment.create(investment_params)
      render json: @investment
    end

    def update
      @investment.update(investment_params)
      render json: @investment
    end

    private

    def investment_params
      params.require(:investment).permit(:offering_id, :amount, :status, :user_id)
    end

    def set_investment
      @investment = Investment.find(params[:id])
    end
  end
end
