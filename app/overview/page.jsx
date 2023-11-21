import ItemsAccordion from "../components/Accordion";
import styles from "./overview.module.css";

const items = [
  {
    dataTest: "accordion-item-1",
    summary: "Step 1) Clone my repo",
    details: "git clone https://github.com/coderyansolomon/cypress-course.git",
    id: "1",
  },
  {
    dataTest: "accordion-item-2",
    summary: "Step 2) Install dependencies",
    details: "npm install",
    id: "2",
  },
  {
    dataTest: "accordion-item-3",
    summary: "Step 4) Run app",
    details: "npm run dev",
    id: "3",
  },
  {
    dataTest: "accordion-item-4",
    summary: "Step 4) Install Cypress",
    details: "npm install cypress --save-dev",
    id: "4",
  },
  {
    dataTest: "accordion-item-5",
    summary: "Step 5) Open & configure Cypress",
    details: "npx cypress open",
    id: "5",
  },
];

export default function Overview() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Overview & Install</h1>
      <ItemsAccordion data-test={items.dataTest} items={items} />
    </main>
  );
}
