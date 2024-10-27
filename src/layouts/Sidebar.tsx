import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../lib/constants'

const linkClass =
	'flex items-center justify-center mx-2 py-3 hover:bg-stone-600 hover:no-underline active:bg-stone-600 rounded-lg text-base'

    interface LinkType {
        key: string;
        path: string;
        label: string;
        icon: JSX.Element;
    }

export default function Sidebar() {
	return (
		<div className="sidebar-bg-color w-24 p-3 flex flex-col">
            <Link
                to="/"
            >
                <div className="logo flex items-center drop-shadow-md w-14 h-14 bg-neutral-300 mx-3 mt-6 mb-24">
                </div>
            </Link>
			<div className="mt-16 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
		</div>
	)
}

function SidebarLink({ link }: { link: LinkType }) {
	const { pathname } = useLocation()
	return (
		<Link
			to={link.path}
			className={link.path === '/settings'? 'bg-neutral-50 rounded-full text-black flex items-center justify-center p-3 m-3' :classNames(pathname === link.path ? 'bg-stone-600 text-white' : 'text-neutral-300', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
		</Link>
	)
}