class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def index
      @users = User.all

      render json: @users
    end

  # def update
  #     if @list.update(list_params)
  #       render json: @list
  #     else
  #       render json: @list.errors, status: :unprocessable_entity
  #     end
  #   end
  #
  #   # DELETE /lists/1
  #   def destroy
  #     @list.destroy
  #     if @list.destroy
  #       head :no_content, status: :ok
  #     else
  #       render json: @list.errors, status: :unprocessable_entity
  #     end
  #   end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password_digest)
  end



end
