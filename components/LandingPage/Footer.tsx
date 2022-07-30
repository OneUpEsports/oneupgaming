import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="flex justify-between p-5 max-w-7xl mx-auto">
				
					<ul>
						<div className="flex gap-6 pb-5">
							<FaInstagram  className="text-2xl cursor-pointer text-white " /> 
							<FaTwitter href="twitter.com/oneupgaming.io" className="text-2xl cursor-pointer text-white " /> 
							<FaLinkedin href="linkedin.com/oneupgaming.io" className="text-2xl cursor-pointer text-white " />
							<FaYoutube href="linkedin.com/oneupgaming.io" className="text-2xl cursor-pointer text-white " />
						</div>
						<div className="flex gap-6 pb-5">
							<p className="text-slate-400">© by OneUpGaming IO</p>
						</div>


					</ul>
				</div>
	
		</>
	);
}

export default Footer;