class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def logo_path
  	@@aaa_white = ActionController::Base.helpers.asset_url('AAA_offwhite.svg')
  	@@aaa_blue = ActionController::Base.helpers.asset_url('AAA_Blue.svg') 
  	@@aaa_logo = ActionController::Base.helpers.asset_url('AAA_offwhite.svg')
  	@@color = "#FFFFFF"
  	@color = @@color
  end

  before_action :logo_path

end
