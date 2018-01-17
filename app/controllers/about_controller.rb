class AboutController < ApplicationController
	before_action :logo_color

	def index
		@people = 	{ people: [
								{ name: "Kelly Hong", role: 'President', year: "Senior", major: 'Computer Science' },
								{ name: "Rebecca Zhuge", role: 'External Vice President', year: "Junior", major: 'Political Science' },
								{ name: "Dana Lin", role: 'Internal Vice President', year: "Senior", major: 'Economics' },
								{ name: "Charmaine Lai", role: 'Director of Finance', year: "Junior", major: 'Economics' },
								{ name: "Tiffany Tran", role: 'Director of Operations', year: "Sophomore", major: 'Economics' },
								{ name: "Justin Zhong", role: 'Senior Advisor', year: "Junior", major: 'Cognitive Science' },
								{ name: "Sarah Zhang", role: 'Senior Advisor', year: "Junior", major: 'MCB' },
								{ name: "Faith Szeto", role: 'Senior Advisor', year: "Senior", major: 'Computer Science' },
								{ name: "Valerie Tan", role: 'Design Chair', year: "Sophomore", major: 'Architecture' },
								{ name: "Everett Kim", role: 'Social Chair', year: "Sophomore", major: 'Psychology & Philosophy' },
								{ name: "Brandon Huang", role: 'Development Chair', year: "Junior", major: 'Statistics' },
								{ name: "Emily Zeng", role: 'Historian Chair', year: "Sophomore", major: 'Psychology' },
								{ name: "Chair Name", role: 'Chair', year: "Sophomore", major: 'Math' },
								{ name: "Chair Name", role: 'Chair', year: "Sophomore", major: 'Math' },
								{ name: "Chair Name", role: 'Chair', year: "Sophomore", major: 'Math' },
								{ name: "Chair Name", role: 'Chair', year: "Sophomore", major: 'Math' }
						]
					}.to_json
	end

	def logo_color
		@logo_path = @@aaa_blue
		@color = "#264653"
	end

end
