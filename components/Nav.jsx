import React from 'react';
import Link from 'next/link';

function Nav() {
	return (
		<div className="navbar bg-green-700 sm:px-5">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost text-white lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li>
							<a>Products</a>
							<ul className="p-2 text-green-700">
								<li>
									<Link href={'/validator'}>Validator</Link>
								</li>
							</ul>
						</li>
						<li>
							<a>Solutions</a>
							<ul className="p-2 text-green-700">
								<li>
									<Link href={'/'}>Bulk Validations</Link>
								</li>
							</ul>
						</li>
						<li>
							<a>Resources</a>
							<ul className="p-2 text-green-700">
								<li>
									<a>FAQs</a>
								</li>
								<li>
									<Link href={'/docs'}>Docs</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href="https://github.com/josephakaro/whatsapp_checker">
								GitHub
							</Link>
						</li>

						<li>
							<Link href={'/pricing'}>Pricing</Link>
						</li>
						<li>
							<Link href={'/contact'}>Contact</Link>
						</li>
						<div className="navbar-end mt-5">
							<Link
								href={'/login'}
								className="btn w-full bg-green-500"
							>
								Log in
							</Link>
						</div>
					</ul>
				</div>
				<Link href={'/'} className="btn btn-ghost text-xl text-white">
					WhatsApp Checker
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex text-white">
				<ul className="menu menu-horizontal px-1">
					<li>
						<details>
							<summary>Products</summary>
							<ul className="p-2 text-green-700 min-w-44">
								<li>
									<Link href="/validator">Validator</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Solutions</summary>
							<ul className="p-2 text-green-700 min-w-44">
								<li>
									<a>Bulk Validation</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Resources</summary>
							<ul className="p-2 text-green-700 min-w-44">
								<li>
									<a>FAQs</a>
								</li>
								<li>
									<Link href="/docs">Docs</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link href="https://github.com/josephakaro/whatsapp_checker">
							GitHub
						</Link>
					</li>
					<li>
						<Link href={'/pricing'}>Pricing</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end gap-4 hidden sm:flex">
				<Link href={'/contact'} className="text-white">
					Contact
				</Link>
				<Link href={'/login'} className="btn text-white btn-ghost">
					Log in
				</Link>
				<Link href={'/signup'} className="btn bg-white">
					Sign Up
				</Link>
			</div>
			<div className="navbar-end gap-4 btn-sm sm:hidden">
				<Link href={'/signup'} className="btn bg-white">
					Sign Up
				</Link>
			</div>
		</div>
	);
}

export default Nav;
