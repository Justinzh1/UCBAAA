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
							dues: "General Member - $15 / Semester",
							description: 'General members make up our largest group in Asian American Association. This is the lowest commitment tier. Come join us as you please!'
						},
					committee: 
						{ 	num:2,
							path: 'committees', 
							verbose: 'Committees',
							positions: ['Committee Member', 'Committee Chair'],
							number: 8, 
							perks: ["Events", "Close knit Family", "Learn new skills"],
							commitment: 'Medium Commitment',
							dues: "General Member - $15 / Semester",
							description: 'Committee members learn a skill throughout the semester and gain a close knite group of friends. This is a higher commitment tier and is a great way to make a difference on campus.',
							links: '/'
						}, 
					family: 
						{ 	num:3, 
							path: 'families', 
							verbose: 'Families',
							positions: ['Family Member', 'Family Head'],
							number: 3,
							perks: ["Events", "Meet new People", "Family Page", "Family Events"], 
							commitment: "Low Commitment",
							description: 'Families are open to all members. As a family member you will have access to Family Events, our big/little system and a large group of people to meet.',
							dues: "General Member - $15 / Semester",
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
							dues: "General Member - $15 / Semester",
							description: 'Cabinet Officers run the behind the scenes work. If you want to help to club grow and gain a deeper understanding of it, join this tier.',
							links: '/'
						}}.to_json
		@active = params[:format]
		if @active.nil?
			@active = :member
		end
	end

	def logo_color
		@logo_path = @@aaa_blue
		@color = "#264653"
	end
end
