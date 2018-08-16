module Api::V1
  class UsersController < ApplicationController
    def index
      @users = User.all
      render json: @users
    end

    def create
      @user = User.create(user_params)
      render json: @user
    end

    def show
      @user = User.find(params[:id])
      render json: @user
    end

    def update
      @user = User.find(params[:id])
      @user.update.attributes(user_params)
      render json: @idea
    end

    def delete
      @user = User.find(params[:id])
      @user.destroy
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :underwriter, :admin, :sales, :dev)
    end
end
end
