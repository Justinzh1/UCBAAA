class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def logo_path
  	@@aaa_logo = ActionController::Base.helpers.asset_url('AAA_offwhite.svg')
  end

  before_action :logo_path

end
