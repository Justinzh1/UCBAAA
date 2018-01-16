class StructureController < ApplicationController
	before_action :logo_color

	def index
		# use sample data for nwo
		@data = { 	member: 
						{ 	num: 1, 
							path: 'members', 
							verbose: 'General Members',
							positions: ['General Member'],
							number: 400, 
							link: '/', 
							perks: ["Events", "Family", "Friends", "Facebook Page", "Merchandise"],
							commitment: "Low Commitment",
							dues: "General Member - $10 / Semester",
							description: 'General members make up our largest group in Asian American Association. This is the lowest commitment tier. Come join us as you please!'
						},
					committee: 
						{ 	num:2,
							path: 'committees', 
							verbose: 'Committees',
							positions: ['Committee Member', 'Committee Chair'],
							number: 8, 
							perks: ["Events", "Close knit Family", "Learn new skills"],
							commitment: 'Low Commitment',
							dues: "General Member - $10 / Semester",
							description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
							links: '/'
						}, 
					family: 
						{ 	num:3, 
							path: 'families', 
							verbose: 'Families',
							positions: ['Family Member', 'Family Head'],
							number: 3,
							perks: ["Events", "Close knit Family", "Meet new People", "Family Page"], 
							commitment: "Low Commitment",
							description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
							dues: "General Member - $10 / Semester",
							links: '/'
						}, 
					cabinet: 
						{ 	num: 4, 
							path: 'cabinet', 
							verbose: 'Cabinet Officers',
							positions: ['President', 'External Vice President', 'Internal Vice President', 'Director of Operations', 'Director of Finance', 'Senior Advisor'],
							number: 8, 
							perks: ["Event Planning", "Close knit Family", "Logistics Planning", "Cabinet Gear"],
							commitment: "High Commitment",
							dues: "General Member - $10 / Semester",
							description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
							links: '/'
						}}.to_json
		@active = params[:format]
	end

	def logo_color
		@logo_path = @@aaa_blue
		@color = "#264653"
	end
end
