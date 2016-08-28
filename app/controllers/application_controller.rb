class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include Pundit
  # protect_from_forgery
  # protect_from_forgery with: :exception
#
#   protect_from_forgery
  helper_method :current_user
  private
  def current_user
    @current_user ||= User.find_by_firstname('Oliver')
  end
end
