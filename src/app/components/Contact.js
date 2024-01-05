"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import emailjs from "@emailjs/browser";
import ToTop from "./ToTop";

export default function Contact() {
	const form = useRef();

	const GradientTitle = styled.h1`
		font-weight: 700;
		font-size: 2rem;
		margin-bottom: 1rem;
		background-color: #f3ec78;
		background-image: linear-gradient(45deg, #c77dff, #7b2cbf);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	`;

	function handleSubmit(e) {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_6orx78n",
				"template_1rzq894",
				form.current,
				"XtjU2O84q0v4ZQVVz"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		form.current.reset();
		alert("Message sent!");
	}

	return (
		<div className="relative">
			<div
				id="contact"
				className="h-screen bg-slate-800 flex justify-center items-center text-center">
				<motion.div
					className="text-xl w-5/6 sm:w-4/6 max-w-2xl flex flex-col justify-center items-center text-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{
						type: "spring",
						damping: 15,
						stiffness: 100
					}}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0.5 }
					}}>
					<GradientTitle>Contact</GradientTitle>
					<form
						ref={form}
						className="flex flex-col justify-center items-center text-center w-full px-6 text-xs"
						onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Full Name"
							name="user_name"
							className="bg-slate-100 text-slate-00 caret-purple-400 w-full p-4 mb-4 border-none focus:outline-none focus:ring focus:ring-purple-400 rounded-xl transition-all"
						/>
						<input
							type="email"
							placeholder="Email"
							name="user_email"
							className="bg-slate-100 text-slate-00 caret-purple-400 w-full p-4 mb-4 border-none focus:outline-none focus:ring focus:ring-purple-400 rounded-xl transition-all"
						/>
						<textarea
							placeholder="Message"
							name="message"
							className="bg-slate-100 text-slate-00 caret-purple-400 w-full p-4 mb-4 border-none focus:outline-none focus:ring focus:ring-purple-400 rounded-xl transition-all"
						/>
						<button className="bg-purple-400 hover:bg-purple-500 text-gray-100 py-2 w-full mb-4 border-none focus:outline-none rounded-xl">
							Send
						</button>
					</form>
				</motion.div>
			</div>
			<ToTop />
		</div>
	);
}
