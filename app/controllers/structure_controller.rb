class StructureController < ApplicationController
	before_action :logo_color

	def index
		# use sample data for nwo
		@data = { member: { path: 'members', number: 400, link: '/' }, committee: { path: 'committees', number: 8, links: '/'}, family: { path: 'families', number: 3, links: '/'}, cabinet: { path: 'cabby', number: 8, links: '/'}}.to_json
	end

	def logo_color
		@logo_path = @@aaa_blue
		@color = "#264653"
	end
end
