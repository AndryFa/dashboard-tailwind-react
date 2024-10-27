import React from 'react'
import { RentalTools, WorkOrderStatus, MissingItems, ToolsAvailability, ReceptionSummary, RestockItms } from '../components';

export default function Dashboard() {
	return (
        <div className="container mx-2 px-4">
            <div className="flex my-3 gap-4">
                <div className="w-3/5">
                    <RentalTools />
                </div>
                <div className="w-2/5">
                    <WorkOrderStatus completed={7} inProgress={3} due={2} />
                </div>
            </div>
            <div className="flex my-3 gap-4">
                <div className="w-2/5">
                    <MissingItems />
                </div>
                <div className="w-3/5">
                    <ToolsAvailability />
                </div>
            </div>
            <div className="flex my-3 gap-4">
                <div className="w-3/5">
                    <RestockItms />
                </div>
                <div className="w-2/5">
                    <ReceptionSummary />
                </div>
            </div>
        </div>
	)
}