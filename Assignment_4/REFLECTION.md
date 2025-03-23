# 📌 Reflection on Challenges in Balancing Stakeholder Needs  

Developing the **Movie Watchlist App** has been both exciting and challenging, especially when trying to balance the different needs of stakeholders. While working on **system requirements**, I faced several tough decisions that I didn’t expect.

---

## 🔹 1. Conflicting Stakeholder Priorities  
One major challenge was **managing different expectations**.  
- 🏷️ **Users** wanted a **simple and easy-to-use** interface.  
- 🛠️ **Developers** preferred a **feature-packed** system.  
- 🌐 **API providers** (like TMDb) have **rate limits**, restricting frequent data fetching.  
  
This made it tricky to provide **real-time updates** without breaking API rules.  

📌 **Problem:** How do I make the app feel real-time without exceeding API limits?  
✅ **Solution:** Instead of real-time updates, I adjusted to periodic syncing to balance speed and restrictions.  

---

## 🔹 2. Scalability vs. Performance  
I initially planned for **1,000+ concurrent users**, but Firebase limitations and costs made me question feasibility.  
At first, I wrote:  
> *"The system shall support 1,000 concurrent users."*  
Then I changed it to:  
> *"The system can support up to 1,000 users."*  

📌 **Problem:** Should I promise performance metrics I’m not 100% confident about?  
✅ **Solution:** It’s better to **set flexible goals** instead of overpromising something uncertain.  

---

## 🔹 3. Security vs. Usability  
Security was another challenge.  
- 🔐 **Developers/Admins** wanted **AES-256 encryption, multi-factor authentication (MFA), and session timeouts**.  
- 👥 **Users** wouldnt want frequent logins or MFA disrupting their experience.  

📌 **Problem:** How do I make the app secure without annoying users?  
✅ **Solution:** Security should be **optional when possible**, for example, making MFA a choice rather than a requirement.  

---

## 🔹 4. Feature Scope Creep  
Stakeholders had many feature requests:  
- 🎞️ **Content creators** would want **movie recommendations**.  
- 🛡️ **Admins** would want **moderation tools**.  
- 📺 **Users** would want **streaming availability tracking**.  
  
Adding everything at once would have **overcomplicated the MVP**.  

📌 **Problem:** Which features should come first?  
✅ **Solution:** Focus on **core features first**, then add extras based on feedback.  

---

## 🔥 Conclusion  
Balancing stakeholder needs isn’t just about technical details, it’s about **compromising, prioritizing, and being realistic**.  
- Not every request can be met immediately.  
- Clear communication about **what’s possible and why** is crucial.  
  
This experience has taught me to make thoughtful decisions while keeping both users and developers in mind.  



