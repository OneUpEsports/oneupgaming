import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// i love React <3

function Footer() {
	return (
		
			<div className="flex justify-between p-5 max-w-7xl mx-auto">
				
					<ul>
						
						<div className="flex gap-6 pb-5">
							<div>
								<a href="http://twitter.com/oneupgaming.io"> 
								<FaTwitter className="text-2xl cursor-pointer text-white " />  
								</a>
							</div>
							
							<div>
								<a href="https://instagram.com/oneupgaming.io">
								<FaInstagram  className="text-2xl cursor-pointer text-white " />
								</a>
							</div>
							<div> 
								<a href="https://www.linkedin.com/company/79049548">
									<FaLinkedin  className="text-2xl cursor-pointer text-white " /> 
								</a>
							</div>
							<div>
								<a href="https://www.youtube.com/channel/UCUA1kR6sFcWCpqVMMiKbPtw">
									<FaYoutube className="text-2xl cursor-pointer text-white " />
								</a>
							</div>
						</div>
						
						<div className="flex gap-6 pb-5">
							<p className="text-slate-400">© by OneUpGaming</p>
						</div>

					</ul>
				</div>
		
	);
}

export default Footer;