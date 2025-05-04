// src/Pricing.jsx
import React, { useState } from "react";
import "../css/Banner.css";

import { Fade } from "react-awesome-reveal";
const plans = [
  {
    id: "starter",
    title: "Starter plan",
    popular: true,
    description: "For small teams getting started",
    monthly: 15,
    annual: 12, // $12/mo billed annually
    features: [
      "Basic hiring tools",
      "Employee management",
      "Payroll integration",
      "Up to 5 individual users",
      "Basic chat and email support",
    ],
  },
  {
    id: "business",
    title: "Business plan",
    popular: false,
    description: "For growing businesses",
    monthly: 40,
    annual: 32, // $32/mo billed annually
    features: [
      "Access to Starter features",
      "AI-Powered Candidate Matching",
      "Up to 20 individual users",
      "Team Collaboration Tools",
      "Priority Support",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise plan",
    popular: false,
    description: "Advanced features + unlimited users",
    monthly: null, // custom
    annual: null, // custom
    features: [
      "Access to Business features",
      "Automated Workflows",
      "Custom Reporting & Analytics",
      "Dedicated Account Manager",
      "Basic chat and email support",
    ],
  },
];

function Pricing() {
  // toggle state: 'monthly' | 'annual'
  const [billing, setBilling] = useState("monthly");

  // helper to format price
  const formatPrice = (p) => (p === null ? "Custom" : `$${p.toLocaleString()}`);

  return (
    <section className="pricing-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="hero-wrapper">
          <Fade direction="down">
            <div className="w-layout-blockcontainer container w-container">
              <div className="section-heading-wrapper">
                <div className="section-eyebrow">
                  <Fade direction="up" triggerOnce="true">
                    <div className="eyebrow">
                      <img
                        src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bddd3e572a0851c9e7856b_icon_lightning_color.svg"
                        loading="lazy"
                        alt=""
                        className="eyebrow-icon"
                      />
                      <div className="eyebrow-text">Pricing</div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
            <h1 className="hero-heading" id="heading">
              Simple, transparent pricing
            </h1>
          </Fade>
          <Fade direction="up" delay={15}>
            <p className="hero-paragraph">
              Choose a plan that fits your team's needs. No hidden fees, just
              powerful HR tools to streamline your workflow.
            </p>
          </Fade>
        </div>
      </div>

      <div className="pricing-header">
        <div className="billing-toggle">
          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly billing
          </button>
          <button
            className={billing === "annual" ? "active" : ""}
            onClick={() => setBilling("annual")}
          >
            Annual billing
          </button>
        </div>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${plan.popular ? "popular" : ""}`}
          >
            <header>
              <h3>{plan.title}</h3>
              {plan.popular && <span className="badge">Popular</span>}
            </header>
            <div className="price">
              <span className="amount">{formatPrice(plan[billing])}</span>
              {plan[billing] !== null && (
                <span className="suffix"> / month</span>
              )}
            </div>
            <p className="desc">{plan.description}</p>
            <div className="actions">
              <button className="btn primary">Get Started</button>
              <button className="btn outline">Chat to Sales</button>
            </div>
            <ul className="features">
              {plan.features.map((f, i) => (
                <li key={i}>
                  <svg
                    className="check-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b49df"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
