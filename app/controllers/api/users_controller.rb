class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end    

    def show 
        @user = User.find_by(id: params[:id])

    end

    # def index 
    #     @users = User.available
    #     render :index

    # end
    
    private 
    def user_params
        params.require(:user).permit(:username, :email, :first_name, :last_name, :country, :password, :photo)
    end


end
