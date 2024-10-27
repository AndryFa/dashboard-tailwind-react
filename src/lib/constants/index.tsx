import { HiOutlineCog } from 'react-icons/hi'
import { HiMiniWrench } from "react-icons/hi2";
import { FaFileContract } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { VscCircuitBoard } from "react-icons/vsc";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'home',
		label: 'Dashboard',
		path: '/',
		icon: <GoHomeFill />
	},
	{
		key: 'rental-tools',
		label: 'Rental Tools',
		path: '/rental-tools',
		icon: <HiMiniWrench />
	},
	{
		key: 'spare-parts',
		label: 'Spare Parts',
		path: '/spare-parts',
		icon: <VscCircuitBoard />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <FaFileContract />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	}
]