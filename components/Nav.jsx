import React from 'react';
import Link from 'next/link';

function Nav() {
	return (
		<div className="navbar bg-green-700 px-5">
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
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Solutions</a>
							<ul className="p-2 text-green-700">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Resources</a>
							<ul className="p-2 text-green-700">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Docs</a>
						</li>
						<li>
							<Link href={'/pricing'}>Pricing</Link>
						</li>
					</ul>
				</div>
				<Link href={'/'} className="btn btn-ghost text-xl text-white">
					isWhatsApp
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex text-white">
				<ul className="menu menu-horizontal px-1">
					<li>
						<details>
							<summary>Products</summary>
							<ul className="p-2 text-green-700 min-w-44">
								<li>
									<Link href="/validator">
										WhatsApp Validator
									</Link>
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
			<div className="navbar-end gap-4">
				<a className="btn btn-ghost">Log in</a>
				<a className="btn bg-white">Sign Up</a>
			</div>
		</div>
	);
}

export default Nav;
