import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "/styles/Edashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBuilding,
	faCalendarDays,
	faHome,
	faMoneyBillTransfer,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
export default function EDashboard() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Company Name</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`${styles.main}`}>
				<div className={styles.sidebar}>
					<li>
						<FontAwesomeIcon className={styles.icon3} icon={faHome} />
						Dashboard
					</li>
					<div className={styles.dropdown1}>
						<li>
							<a href="#">Employees</a>
						</li>
					</div>
					<li>
						<FontAwesomeIcon className={styles.icon3} icon={faCalendarDays} />
						Time Management
					</li>
					<div className={styles.dropdown2}>
						<li>
							<a href="#">Time Off</a>
						</li>
						<li>
							<a href="#">Attendance</a>
						</li>
						<li>
							<a href="#">Schedule</a>
						</li>
						<li>
							<a href="#">Calender</a>
						</li>
						<li>
							<a href="#">Timesheet</a>
						</li>
					</div>
					<li>
						<FontAwesomeIcon className={styles.icon3} icon={faUser} />
						Finance
					</li>
					<div className={styles.dropdown3}>
						<li>
							<a href="#">Reimbursement</a>
						</li>
						<li>
							<a href="#">Cash Advance</a>
						</li>
						<li>
							<a href="#">Loan</a>
						</li>
					</div>
					<li>
						<FontAwesomeIcon className={styles.icon3} icon={faMoneyBillTransfer} />
						Payroll
					</li>
					<li>
						<FontAwesomeIcon className={styles.icon3} icon={faBuilding} />
						Company
					</li>
				</div>
			</main>
		</div>
	);
}