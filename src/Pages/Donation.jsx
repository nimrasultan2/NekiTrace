import "../styles/Donation.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Donate({ project, setPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const donationProject = project || {
    id: 17,
    title: "Monthly Food Drive",
    beneficiary: "Community Food Drive",
    category: "Community Initiative",
    image: "FoodDrive.jpg",
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [amount, setAmount] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [proofFile, setProofFile] = useState(null);

  function handlePresetAmountClick(preset) {
    setAmount(String(preset));
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);

    if (value.trim() === "") {
      setEmailError("");
      return;
    }

    const hasAt = value.includes("@");
    const hasDotAfterAt = hasAt && value.split("@")[1]?.includes(".");

    if (!hasAt) {
      setEmailError("Email must include @");
    } else if (!hasDotAfterAt) {
      setEmailError("Email must include a domain like .com");
    } else {
      setEmailError("");
    }
  }

  function handlePhoneChange(e) {
    const value = e.target.value;
    setPhone(value);

    if (value.trim() === "") {
      setPhoneError("");
      return;
    }

    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setPhoneError("Phone number must include at least 10 digits.");
    } else {
      setPhoneError("");
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setProofFile(file);
    }
  }

  function handleSubmit(e) {

    console.log("Amount:", amount);
    e.preventDefault();
    setSubmitError("");

    if (emailError || phoneError) {
      setSubmitError("Please fix the errors above before submitting.");
      return;
    }

    if (amount === "") {
      setSubmitError("Please enter the amount you have donated.");
      return;
    }

    const finalAmount = Number(amount);

    if (finalAmount <= 0) {
      setSubmitError("Donation amount must be greater than zero.");
      return;
    }

    if (!proofFile) {
      setSubmitError(
        "Please upload a screenshot of your transaction proof before submitting.",
      );
      return;
    }

    if (!donationProject.id) {
      setSubmitError(
        "No campaign selected. Please go back and choose a project.",
      );
      return;
    }

    const payload = {
      projectId: donationProject.id,
      donorName: fullName,
      email: email,
      phone: phone,
      amount: finalAmount,
      message: message,
      isAnonymous: isAnonymous,
      proofImageUrl: proofFile.name,
    };

    setIsSubmitting(true);

    fetch("http://localhost:8080/api/donations", 
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to submit donation");
        return res.json();
      })
      .then(() => {
        setSubmitSuccess(true);
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error(err);
        setSubmitError(
          "Something went wrong submitting your donation. Please try again.",
        );
        setIsSubmitting(false);
      });
  }

  if (submitSuccess) {
    return (
      <>
        <Navbar />
        <section className="donate-hero">
          <div className="container">
            <h1>Thank You!</h1>
            <p>
              Your support for "{donationProject.title}" has been recorded. We
              truly appreciate your generosity.
            </p>
            <button
              className="submit-btn"
              onClick={() => navigate("/projects")}
            >
              Back to Projects
            </button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar setPage={setPage} />
      <section className="donate-hero">
        <div className="container">
          <h1>Support This Cause</h1>
          <p>
            Your kindness today can change someone's tomorrow. Every donation,
            no matter the amount, helps bring hope closer.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="donation-info">
          <div className="summary-card">
            <img src={donationProject.image} alt={donationProject.title} />

            <div>
              <h3>{donationProject.title}</h3>
              <p>{donationProject.beneficiary}</p>
              <span>{donationProject.category}</span>
            </div>
          </div>

          <div className="bank-box">
            <h3>Bank Transfer Details</h3>
            <p className="bank-desc">
              Transfer your donation using the following account details.
            </p>
            <p>
              <strong>Bank Name:</strong> NekiTrace Welfare Bank
            </p>
            <p>
              <strong>Account Title:</strong> NekiTrace Foundation
            </p>
            <p>
              <strong>Account Number:</strong> 1234-5678-9012
            </p>
            <p>
              <strong>IBAN:</strong> PK00 NEKI 1234 5678 9012
            </p>
            <p>
              <strong>Branch Code:</strong> 0012
            </p>
          </div>
        </div>
      </div>

      <section className="donate-section">
        <div className="container donate-grid">
          <div className="campaign-card">
            <img
              src="DonationImage.png"
              alt="Donate"
              className="campaign-image"
            />
          </div>

          <form className="donation-form" onSubmit={handleSubmit}>
            <h2>Donation Form</h2>

            {submitError && <p className="donation-error">{submitError}</p>}

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address (optional)"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="field-error">{emailError}</p>}

            <input
              type="tel"
              placeholder="Phone Number (optional)"
              value={phone}
              onChange={handlePhoneChange}
            />
            {phoneError && <p className="field-error">{phoneError}</p>}

            <label>Choose Donation Amount *</label>

            <div className="amount-buttons">
              {[1000, 2500, 5000, 10000].map((preset) => (
                <button
                  type="button"
                  key={preset}
                  className={Number(amount) === preset ? "amount-selected" : ""}
                  onClick={() => handlePresetAmountClick(preset)}
                  required
                >
                  Rs.{preset}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Or Enter Custom Amount"
              value={amount}
              onChange={handleAmountChange}
            />

            <label className="checkbox">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
              />
              Donate Anonymously
            </label>

            <textarea
              rows="5"
              placeholder="Leave a message for the beneficiary..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <div className="proof-upload">
              <label>Upload Transaction Proof *</label>
              <p>Please upload a screenshot of your payment confirmation.</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Your Support"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
