module Api::V1
  class UsersController < ApplicationController
    before_action :set_user, only: %i[show update destroy]

    def index
      @users = User.all
      render json: @users
    end

    def create
      @user = User.create(user_params)
      render json: @user
    end

    def show
      render json: @user
    end

    def update
      @user.update(user_params)
      render json: @user
    end

    def destroy
      @user.destroy
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :underwriter, :admin, :sales, :dev)
    end

    def set_user
      @user = User.find(params[:id])
    end
end
end
