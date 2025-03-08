# 📌 Reflection on Challenges in Balancing Stakeholder Needs  

Developing the **Movie Watchlist App** has been an insightful yet challenging experience, particularly in balancing the diverse and sometimes conflicting needs of stakeholders. While defining the **system requirements**, I encountered several obstacles that made decision-making more complex than anticipated.  

## 1️⃣ Conflicting Stakeholder Priorities  
One of the biggest challenges was **managing the expectations of different stakeholders**. End users want a **simple and intuitive** interface, while developers prefer a **feature-rich** system with advanced capabilities. Additionally, **API providers** (such as TMDb) impose **rate limits**, restricting how frequently data can be fetched. This made it difficult to ensure that users always receive **real-time updates** while staying within API constraints.  

📌 **Struggle:** How do I provide a seamless user experience while ensuring API limits aren’t exceeded?  
📌 **Lesson Learned:** Compromises had to be made—real-time updates were adjusted to periodic synchronization to balance performance and API restrictions.  

---

## 2️⃣ Scalability vs. Performance  
From a **technical standpoint**, ensuring **scalability** while maintaining **performance** proved to be another challenge. The initial plan was to support **1,000+ concurrent users**, but after considering Firebase limitations and potential infrastructure costs, I had to re-evaluate feasibility. The documentation initially stated, *"The system shall support 1,000 concurrent users,"* but later, I hesitated and changed it to, *"It is possible for the system to support up to 1,000 concurrent users."* This reflected my uncertainty about whether the current architecture could truly handle the load.  

📌 **Struggle:** Should I commit to a performance metric I’m not entirely confident about?  
📌 **Lesson Learned:** Instead of overpromising, it’s better to phrase scalability goals based on **progressive optimization** rather than rigid expectations.  

---

## 3️⃣ Security vs. Usability  
Implementing **strong security measures**—such as **AES-256 encryption, multi-factor authentication (MFA), and session expiration policies**—was a clear priority for **developers and administrators**. However, **end users** often find excessive security features inconvenient. Some may not want **MFA** or **auto-logout features** disrupting their experience.  

📌 **Struggle:** How do I balance security without frustrating users?  
📌 **Lesson Learned:** Security must be **non-intrusive**—for example, offering MFA as **optional** rather than mandatory.  

---

## 4️⃣ Feature Scope Creep  
Another issue was **managing feature requests**. Content curators wanted a **movie recommendation engine**, administrators wanted **content moderation tools**, and end users wanted **cross-platform streaming availability tracking**. While all these features are valuable, implementing everything at once would have **overcomplicated the MVP**.  

📌 **Struggle:** Which features should be prioritized for the first release?  
📌 **Lesson Learned:** A **phased development approach** is necessary—focusing on core features first, then iterating based on feedback.  

---

## 🔥 Conclusion  
Balancing stakeholder needs is **not just about meeting technical requirements**—it’s about **compromising, prioritizing, and making realistic commitments**. I learned that **not all requests can be accommodated immediately**, and it’s crucial to communicate **what is feasible, what isn’t, and why**.  

While this project challenged my decision-making skills, it also reinforced the **importance of trade-offs in software development**. Moving forward, I will focus on **refining priorities, validating feasibility earlier, and ensuring alignment between technical capabilities and stakeholder expectations**.  
