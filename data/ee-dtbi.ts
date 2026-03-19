import { Question } from '@/types/quiz';

// Questions - replace with your full 70 questions later
export const mockQuestions: Question[] = [
    {
        "id": 1,
        "question": "What is the primary goal of Business Data Analytics?",
        "options": ["To use data to support better business decision-making", "To only design websites", "To only play video games", "To only send emails", "To only print reports"],
        "answer": "To use data to support better business decision-making",
        "explanation": "Business Data Analytics applies data, statistical analysis, and quantitative methods to drive informed strategic and operational decisions."
    },
    {
        "id": 2,
        "question": "Which of the following is NOT one of the four main stages of the Business Data Analytics process?",
        "options": ["Data Collection", "Data Preparation", "Data Visualization", "Data Destruction", "Data Analysis"],
        "answer": "Data Destruction",
        "explanation": "The standard stages are Collection → Preparation → Analysis → Visualization (sometimes extended with modeling and deployment)."
    },
    {
        "id": 3,
        "question": "What does descriptive analytics primarily answer?",
        "options": ["What happened?", "What will happen?", "Why did it happen?", "What should we do?", "How can we predict?"],
        "answer": "What happened?",
        "explanation": "Descriptive analytics summarizes historical data to understand past performance (reports, dashboards, KPIs)."
    },
    {
        "id": 4,
        "question": "Which type of analytics focuses on understanding why something happened?",
        "options": ["Diagnostic analytics", "Predictive analytics", "Prescriptive analytics", "Descriptive analytics", "Exploratory analytics"],
        "answer": "Diagnostic analytics",
        "explanation": "Diagnostic analytics uses techniques like drill-down and data mining to identify root causes."
    },
    {
        "id": 5,
        "question": "Predictive analytics is mainly used to:",
        "options": ["Forecast future outcomes using statistical models and machine learning", "Only summarize past data", "Only create pretty charts", "Only send emails", "Only print documents"],
        "answer": "Forecast future outcomes using statistical models and machine learning",
        "explanation": "It answers 'What is likely to happen?' using regression, time-series, and ML techniques."
    },
    {
        "id": 6,
        "question": "Prescriptive analytics goes one step further by recommending:",
        "options": ["Specific actions to achieve desired outcomes", "Only historical summaries", "Only future predictions", "Only beautiful visualizations", "Only data collection methods"],
        "answer": "Specific actions to achieve desired outcomes",
        "explanation": "It combines predictive models with optimization and simulation to suggest the best course of action."
    },
    {
        "id": 7,
        "question": "Which of the following is an example of structured data?",
        "options": ["Excel spreadsheets and SQL databases", "Social media posts and emails", "PDF documents and images", "Video files", "Voice recordings"],
        "answer": "Excel spreadsheets and SQL databases",
        "explanation": "Structured data is organized in rows and columns and easily queried."
    },
    {
        "id": 8,
        "question": "What is the most common source of internal data for business analytics?",
        "options": ["Company ERP, CRM, and transaction systems", "Social media only", "Government census only", "Competitor websites only", "Newspapers only"],
        "answer": "Company ERP, CRM, and transaction systems",
        "explanation": "Internal data from operational systems (sales, finance, marketing) is the richest and most reliable source."
    },
    {
        "id": 9,
        "question": "Which data collection method is best for gathering real-time customer feedback?",
        "options": ["Web surveys and mobile apps", "Printed questionnaires only", "Telephone calls only", "Face-to-face interviews only", "Mail surveys only"],
        "answer": "Web surveys and mobile apps",
        "explanation": "Digital tools provide instant responses, higher reach, and lower cost."
    },
    {
        "id": 10,
        "question": "What is the key difference between primary and secondary data?",
        "options": ["Primary data is collected firsthand for the current study; secondary data is already published", "Primary is always free", "Secondary is always expensive", "Primary is only qualitative", "Secondary is only quantitative"],
        "answer": "Primary data is collected firsthand for the current study; secondary data is already published",
        "explanation": "Primary data is original; secondary data saves time but may not perfectly fit the research needs."
    },
    {
        "id": 11,
        "question": "What is the first and most critical step in data preparation?",
        "options": ["Data cleaning (handling missing values, duplicates, and errors)", "Data visualization", "Data modeling", "Data reporting", "Data presentation"],
        "answer": "Data cleaning (handling missing values, duplicates, and errors)",
        "explanation": "Garbage in, garbage out — unclean data leads to wrong insights."
    },
    {
        "id": 12,
        "question": "Which technique is commonly used to handle missing numerical values during data preparation?",
        "options": ["Mean/median imputation or deletion", "Replacing with random text", "Deleting the entire column", "Ignoring the problem", "Adding fictional data"],
        "answer": "Mean/median imputation or deletion",
        "explanation": "Imputation preserves data volume; deletion is used when missing values are few."
    },
    {
        "id": 13,
        "question": "What is data normalization in the preparation stage?",
        "options": ["Scaling numeric features to a standard range (usually 0–1 or –1 to 1)", "Making data colorful", "Adding more rows", "Deleting columns", "Changing data types only"],
        "answer": "Scaling numeric features to a standard range (usually 0–1 or –1 to 1)",
        "explanation": "Normalization prevents features with larger ranges from dominating machine-learning models."
    },
    {
        "id": 14,
        "question": "Outlier detection is part of which stage?",
        "options": ["Data preparation", "Data collection", "Data visualization", "Data presentation", "Data destruction"],
        "answer": "Data preparation",
        "explanation": "Outliers can skew analysis and must be identified (using IQR, z-score, etc.) and treated appropriately."
    },
    {
        "id": 15,
        "question": "Which visualization is best for showing the distribution of a single continuous variable?",
        "options": ["Histogram", "Pie chart", "Line chart", "Scatter plot", "Bar chart"],
        "answer": "Histogram",
        "explanation": "Histograms show frequency distribution and help identify skewness and outliers."
    },
    {
        "id": 16,
        "question": "What type of chart is ideal for comparing categories or showing market share?",
        "options": ["Bar chart or column chart", "Line chart", "Scatter plot", "Histogram", "Box plot"],
        "answer": "Bar chart or column chart",
        "explanation": "Bar/column charts clearly compare discrete categories and are easy to read."
    },
    {
        "id": 17,
        "question": "Which chart type is most suitable for showing trends over time?",
        "options": ["Line chart", "Pie chart", "Scatter plot", "Histogram", "Bar chart"],
        "answer": "Line chart",
        "explanation": "Line charts connect data points chronologically and highlight upward/downward trends."
    },
    {
        "id": 18,
        "question": "What is the purpose of a dashboard in data visualization?",
        "options": ["To provide an at-a-glance overview of multiple KPIs", "To only show one chart", "To print reports only", "To store data", "To delete data"],
        "answer": "To provide an at-a-glance overview of multiple KPIs",
        "explanation": "Dashboards combine charts, tables, and metrics for real-time monitoring."
    },
    {
        "id": 19,
        "question": "Which principle should guide all data visualizations?",
        "options": ["Clarity, honesty, and simplicity", "Use as many colors as possible", "Add many animations", "Make text very small", "Use 3D effects everywhere"],
        "answer": "Clarity, honesty, and simplicity",
        "explanation": "Effective visualizations communicate insights clearly without misleading the audience."
    },
    {
        "id": 20,
        "question": "What tool is widely used for interactive business dashboards?",
        "options": ["Power BI or Tableau", "Microsoft Word", "Notepad", "Calculator", "Paint"],
        "answer": "Power BI or Tableau",
        "explanation": "Both tools allow drag-and-drop creation of interactive, shareable dashboards."
    },
    {
        "id": 21,
        "question": "What does 'The Living Brand' concept mean?",
        "options": ["A brand that evolves through continuous customer interaction and experience", "A brand that never changes", "A brand that only uses TV ads", "A brand that only sells products", "A brand that is only a logo"],
        "answer": "A brand that evolves through continuous customer interaction and experience",
        "explanation": "Modern brands are living entities shaped by every touchpoint and customer conversation."
    },
    {
        "id": 22,
        "question": "Personal branding is best defined as:",
        "options": ["The intentional effort to create and manage a public perception of an individual", "Only designing a logo", "Only posting on social media", "Only wearing nice clothes", "Only having business cards"],
        "answer": "The intentional effort to create and manage a public perception of an individual",
        "explanation": "It combines skills, values, and online/offline presence to differentiate oneself."
    },
    {
        "id": 23,
        "question": "Which of the following is a key element of personal branding?",
        "options": ["Consistency across all platforms and touchpoints", "Changing your name every month", "Posting only negative content", "Using only one social media account", "Never updating your profile"],
        "answer": "Consistency across all platforms and touchpoints",
        "explanation": "Consistency builds trust and recognition."
    },
    {
        "id": 24,
        "question": "Brand quality assessment typically measures:",
        "options": ["Perceived quality, customer satisfaction, and loyalty", "Only the price of the product", "Only the color of the logo", "Only the size of the company", "Only the number of employees"],
        "answer": "Perceived quality, customer satisfaction, and loyalty",
        "explanation": "Tools like Net Promoter Score (NPS) and brand tracking studies are commonly used."
    },
    {
        "id": 25,
        "question": "What is the role of a Machine Learning model in brand quality assessment?",
        "options": ["To predict customer sentiment and churn from review data", "To only design logos", "To only print brochures", "To only send emails", "To only count likes"],
        "answer": "To predict customer sentiment and churn from review data",
        "explanation": "ML models (sentiment analysis, classification) turn unstructured feedback into actionable insights."
    },
    {
        "id": 26,
        "question": "Which digital branding practice helps a brand stay relevant in a fast-changing market?",
        "options": ["Continuous listening and adaptation to customer feedback", "Never changing anything", "Using only old advertisements", "Ignoring social media", "Deleting all reviews"],
        "answer": "Continuous listening and adaptation to customer feedback",
        "explanation": "Agile branding requires real-time response to trends and sentiment."
    },
    {
        "id": 27,
        "question": "What is the main benefit of strong personal branding for professionals?",
        "options": ["Increased career opportunities and authority in their field", "Only more followers", "Only higher salary immediately", "Only free products", "Only more likes"],
        "answer": "Increased career opportunities and authority in their field",
        "explanation": "A strong personal brand positions you as a thought leader and opens doors."
    },
    {
        "id": 28,
        "question": "Brand quality assessment often uses which metric to measure customer loyalty?",
        "options": ["Net Promoter Score (NPS)", "Number of employees", "Company revenue only", "Stock price only", "Number of offices"],
        "answer": "Net Promoter Score (NPS)",
        "explanation": "NPS asks how likely customers are to recommend the brand (0–10 scale)."
    },
    {
        "id": 29,
        "question": "Which ML technique is commonly used for sentiment analysis in brand monitoring?",
        "options": ["Natural Language Processing (NLP)", "Only linear regression", "Only clustering", "Only decision trees", "Only image recognition"],
        "answer": "Natural Language Processing (NLP)",
        "explanation": "NLP models classify reviews and social mentions as positive, negative, or neutral."
    },
    {
        "id": 30,
        "question": "What is the living brand concept also called?",
        "options": ["Dynamic or experiential branding", "Static branding", "Traditional branding", "Paper-based branding", "TV-only branding"],
        "answer": "Dynamic or experiential branding",
        "explanation": "It emphasizes that a brand is shaped by every customer interaction and experience."
    },
    {
        "id": 31,
        "question": "What are the main components of Digital Business?",
        "options": ["Digital products/services, online channels, data, and technology infrastructure", "Only physical stores", "Only cash payments", "Only printed catalogs", "Only face-to-face meetings"],
        "answer": "Digital products/services, online channels, data, and technology infrastructure",
        "explanation": "Digital Business integrates technology across the entire value chain."
    },
    {
        "id": 32,
        "question": "Microenvironment analysis focuses on factors that are:",
        "options": ["Close to the company and directly affect it (customers, suppliers, competitors)", "Only global economic trends", "Only political laws", "Only weather conditions", "Only population growth"],
        "answer": "Close to the company and directly affect it (customers, suppliers, competitors)",
        "explanation": "It includes the company itself, suppliers, marketing intermediaries, customers, competitors, and publics."
    },
    {
        "id": 33,
        "question": "SWOT analysis stands for:",
        "options": ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Wins, Orders, Targets", "Strategy, Work, Output, Time", "Social, World, Online, Technology"],
        "answer": "Strengths, Weaknesses, Opportunities, Threats",
        "explanation": "SWOT is a strategic planning tool that evaluates internal and external factors."
    },
    {
        "id": 34,
        "question": "Porter's Five Forces model analyzes:",
        "options": ["Industry attractiveness and competitive intensity", "Only company strengths", "Only global weather", "Only employee satisfaction", "Only product colors"],
        "answer": "Industry attractiveness and competitive intensity",
        "explanation": "The five forces are: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, and rivalry among existing competitors."
    },
    {
        "id": 35,
        "question": "PESTEL analysis examines which type of environment?",
        "options": ["Macroenvironment (Political, Economic, Social, Technological, Environmental, Legal)", "Only internal company factors", "Only customer preferences", "Only product design", "Only advertising budget"],
        "answer": "Macroenvironment (Political, Economic, Social, Technological, Environmental, Legal)",
        "explanation": "PESTEL helps assess broad external factors that influence the industry."
    },
    {
        "id": 36,
        "question": "The Business Model Canvas (BMC) consists of how many building blocks?",
        "options": ["9", "5", "12", "3", "15"],
        "answer": "9",
        "explanation": "The nine blocks are: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, and Cost Structure."
    },
    {
        "id": 37,
        "question": "The SOSTAC model is used for:",
        "options": ["Digital marketing planning (Situation, Objectives, Strategy, Tactics, Action, Control)", "Only financial reporting", "Only product design", "Only employee training", "Only legal compliance"],
        "answer": "Digital marketing planning (Situation, Objectives, Strategy, Tactics, Action, Control)",
        "explanation": "SOSTAC is a widely used framework for creating effective marketing plans."
    },
    {
        "id": 38,
        "question": "The STOP principle in digital business stands for:",
        "options": ["Strategic, Tactical, Operational, Personal", "Sales, Targets, Orders, Profits", "Simple, Timely, Objective, Precise", "Social, Technology, Online, Political"],
        "answer": "Strategic, Tactical, Operational, Personal",
        "explanation": "STOP helps align decisions at different levels of the organization."
    },
    {
        "id": 39,
        "question": "The SIT principle is often used in:",
        "options": ["Creative problem-solving and innovation (Systematic Inventive Thinking)", "Only financial calculations", "Only legal contracts", "Only employee hiring", "Only product packaging"],
        "answer": "Creative problem-solving and innovation (Systematic Inventive Thinking)",
        "explanation": "SIT uses structured patterns to generate innovative solutions."
    },
    {
        "id": 40,
        "question": "Which international organization primarily sets rules for global trade?",
        "options": ["World Trade Organization (WTO)", "United Nations only", "NATO", "ASEAN only", "Olympic Committee"],
        "answer": "World Trade Organization (WTO)",
        "explanation": "The WTO regulates international trade, resolves disputes, and promotes fair practices."
    },
    {
        "id": 41,
        "question": "What is the main purpose of Data Management?",
        "options": ["To ensure data is accurate, accessible, secure, and usable throughout its lifecycle", "To only delete old files", "To only print reports", "To only design websites", "To only play games"],
        "answer": "To ensure data is accurate, accessible, secure, and usable throughout its lifecycle",
        "explanation": "Effective data management supports analytics, compliance, and business operations."
    },
    {
        "id": 42,
        "question": "Data Governance refers to:",
        "options": ["The overall management of data availability, usability, integrity, and security", "Only backup procedures", "Only data entry rules", "Only report formatting", "Only website design"],
        "answer": "The overall management of data availability, usability, integrity, and security",
        "explanation": "It includes policies, roles, and processes that control data assets."
    },
    {
        "id": 43,
        "question": "Which of the following is a key component of a Data Governance framework?",
        "options": ["Data stewardship and clear roles/responsibilities", "Only buying new computers", "Only hiring more staff", "Only changing office layout", "Only updating logos"],
        "answer": "Data stewardship and clear roles/responsibilities",
        "explanation": "Data stewards are assigned accountability for data quality and compliance."
    },
    {
        "id": 44,
        "question": "What is the main benefit of having a strong Data Governance policy?",
        "options": ["Improved data quality, regulatory compliance, and better decision-making", "Higher electricity bills", "More paper usage", "Slower internet", "Fewer meetings"],
        "answer": "Improved data quality, regulatory compliance, and better decision-making",
        "explanation": "Good governance reduces risks and increases trust in data-driven decisions."
    },
    {
        "id": 45,
        "question": "Which regulation is most commonly associated with data governance in Europe?",
        "options": ["GDPR (General Data Protection Regulation)", "ASEAN Free Trade Agreement", "FIFA rules", "Olympic Charter", "WTO trade rules"],
        "answer": "GDPR (General Data Protection Regulation)",
        "explanation": "GDPR sets strict standards for data protection and privacy rights."
    },
    {
        "id": 46,
        "question": "Data lifecycle management includes which stages?",
        "options": ["Creation, storage, usage, archiving, and deletion", "Only creation and deletion", "Only printing and scanning", "Only buying and selling", "Only emailing"],
        "answer": "Creation, storage, usage, archiving, and deletion",
        "explanation": "The full lifecycle ensures data is handled responsibly from birth to disposal."
    },
    {
        "id": 47,
        "question": "Master Data Management (MDM) primarily deals with:",
        "options": ["Consistent and accurate core business entities (customers, products, suppliers)", "Only employee salaries", "Only office furniture", "Only company cars", "Only lunch menus"],
        "answer": "Consistent and accurate core business entities (customers, products, suppliers)",
        "explanation": "MDM creates a single source of truth for critical shared data."
    },
    {
        "id": 48,
        "question": "What is the role of a Data Governance Council?",
        "options": ["To set policies, resolve issues, and oversee data strategy", "To only fix computers", "To only design logos", "To only answer phones", "To only make coffee"],
        "answer": "To set policies, resolve issues, and oversee data strategy",
        "explanation": "It is a cross-functional body that provides oversight and decision-making authority."
    },
    {
        "id": 49,
        "question": "Which of the following is a common Data Governance tool?",
        "options": ["Collibra, Informatica, or Alation", "Microsoft Paint", "Notepad", "Calculator", "Spotify"],
        "answer": "Collibra, Informatica, or Alation",
        "explanation": "These platforms help document policies, manage metadata, and track data lineage."
    },
    {
        "id": 50,
        "question": "Data quality dimensions typically include which of the following?",
        "options": ["Accuracy, completeness, consistency, timeliness, validity", "Only brightness and color", "Only font size", "Only paper quality", "Only ink color"],
        "answer": "Accuracy, completeness, consistency, timeliness, validity",
        "explanation": "These six dimensions (sometimes more) are used to measure and improve data quality."
    },
    {
        "id": 51,
        "question": "What is the main difference between data management and data governance?",
        "options": ["Data management is the execution of processes; data governance is the strategy and oversight", "They are exactly the same", "Data management is only printing", "Data governance is only backup", "Data management is only deleting"],
        "answer": "Data management is the execution of processes; data governance is the strategy and oversight",
        "explanation": "Governance sets the rules; management carries out the day-to-day activities."
    },
    {
        "id": 52,
        "question": "Which principle states that data should be managed as a valuable business asset?",
        "options": ["Data as an Asset", "Data as a Cost", "Data as a Burden", "Data as a Hobby", "Data as a Game"],
        "answer": "Data as an Asset",
        "explanation": "Modern organizations treat high-quality data as a strategic asset that drives competitive advantage."
    },
    {
        "id": 53,
        "question": "What does 'data lineage' refer to in data governance?",
        "options": ["Tracking the origin, movement, and transformation of data", "Only the color of data", "Only the size of files", "Only the number of users", "Only the storage location"],
        "answer": "Tracking the origin, movement, and transformation of data",
        "explanation": "Lineage provides transparency and helps with compliance and troubleshooting."
    },
    {
        "id": 54,
        "question": "A Data Governance Policy should clearly define:",
        "options": ["Roles, responsibilities, standards, and procedures", "Only company holidays", "Only lunch times", "Only dress code", "Only parking rules"],
        "answer": "Roles, responsibilities, standards, and procedures",
        "explanation": "A written policy ensures everyone understands expectations and accountability."
    },
    {
        "id": 55,
        "question": "Which of the following is a key benefit of effective Data Governance?",
        "options": ["Reduced risk of regulatory fines and improved trust in data", "Higher electricity bills", "More paper usage", "Slower internet speed", "Fewer meetings"],
        "answer": "Reduced risk of regulatory fines and improved trust in data",
        "explanation": "Strong governance helps organizations comply with laws like GDPR and build confidence in analytics."
    },
    {
        "id": 56,
        "question": "What is metadata in the context of data management?",
        "options": ["Data about data (description, origin, format, owner)", "Only colorful charts", "Only printed reports", "Only email attachments", "Only video files"],
        "answer": "Data about data (description, origin, format, owner)",
        "explanation": "Metadata makes data discoverable and understandable."
    },
    {
        "id": 57,
        "question": "Data stewardship involves:",
        "options": ["Day-to-day accountability for data quality and compliance", "Only designing websites", "Only playing games", "Only sending emails", "Only printing documents"],
        "answer": "Day-to-day accountability for data quality and compliance",
        "explanation": "Data stewards are subject-matter experts responsible for specific data domains."
    },
    {
        "id": 58,
        "question": "Which framework is commonly used to structure Data Governance programs?",
        "options": ["DAM A (Data Management Body of Knowledge) or CMMI for Data", "Only FIFA rules", "Only Olympic Charter", "Only WTO rules", "Only ASEAN agreement"],
        "answer": "DAM A (Data Management Body of Knowledge) or CMMI for Data",
        "explanation": "These provide best-practice guidelines and maturity models for data management."
    },
    {
        "id": 59,
        "question": "What is the ultimate goal of combining Data Management and Data Governance?",
        "options": ["To treat data as a strategic asset that drives business value while ensuring compliance and quality", "To delete all old data", "To use only paper records", "To avoid technology", "To increase costs"],
        "answer": "To treat data as a strategic asset that drives business value while ensuring compliance and quality",
        "explanation": "When done well, data becomes a competitive advantage rather than a liability."
    },
    {
        "id": 60,
        "question": "Which of the following is a common Data Governance challenge?",
        "options": ["Lack of executive sponsorship and unclear roles", "Too many meetings", "Too much free food", "Too many holidays", "Too many colors in charts"],
        "answer": "Lack of executive sponsorship and unclear roles",
        "explanation": "Without leadership support and defined responsibilities, governance initiatives often fail."
    },
    {
        "id": 61,
        "question": "What does the term 'Data Quality' primarily refer to?",
        "options": ["Fitness for intended use (accuracy, completeness, consistency, timeliness)", "Only the brightness of screens", "Only the color of reports", "Only the size of files", "Only the number of users"],
        "answer": "Fitness for intended use (accuracy, completeness, consistency, timeliness)",
        "explanation": "High-quality data is reliable and suitable for the purpose it is being used for."
    },
    {
        "id": 62,
        "question": "Which dimension of data quality means data is up-to-date and available when needed?",
        "options": ["Timeliness", "Colorfulness", "Loudness", "Weight", "Temperature"],
        "answer": "Timeliness",
        "explanation": "Timely data ensures decisions are made based on current information."
    },
    {
        "id": 63,
        "question": "What is the purpose of a Data Dictionary in data governance?",
        "options": ["To provide a centralized definition and description of all data elements", "To only list employee names", "To only show company logos", "To only print maps", "To only play music"],
        "answer": "To provide a centralized definition and description of all data elements",
        "explanation": "It improves understanding and reduces misinterpretation of data across the organization."
    },
    {
        "id": 64,
        "question": "Which of the following is an example of a data governance policy document?",
        "options": ["Data Retention Policy", "Office Party Policy", "Lunch Menu Policy", "Dress Code Policy", "Parking Policy"],
        "answer": "Data Retention Policy",
        "explanation": "It defines how long different types of data must be kept and when they should be securely deleted."
    },
    {
        "id": 65,
        "question": "What does 'Data Lineage' help organizations achieve?",
        "options": ["Traceability of data from source to destination", "Only faster internet", "Only brighter screens", "Only more colors", "Only louder speakers"],
        "answer": "Traceability of data from source to destination",
        "explanation": "It supports compliance, impact analysis, and troubleshooting."
    },
    {
        "id": 66,
        "question": "A Data Governance Maturity Model helps organizations:",
        "options": ["Assess their current level and plan improvements", "Only count employees", "Only measure office size", "Only check coffee quality", "Only rate furniture"],
        "answer": "Assess their current level and plan improvements",
        "explanation": "Models like CMMI or DAMA-DMBOK maturity levels guide progressive development."
    },
    {
        "id": 67,
        "question": "Which role is ultimately accountable for data governance in most organizations?",
        "options": ["Chief Data Officer (CDO) or Data Governance Council", "Only the receptionist", "Only the security guard", "Only the cleaner", "Only the driver"],
        "answer": "Chief Data Officer (CDO) or Data Governance Council",
        "explanation": "Executive ownership ensures governance receives the necessary authority and resources."
    },
    {
        "id": 68,
        "question": "What is the main risk of poor data governance?",
        "options": ["Regulatory fines, loss of trust, and poor business decisions", "Higher electricity bills", "More paper usage", "Slower printers", "Fewer meetings"],
        "answer": "Regulatory fines, loss of trust, and poor business decisions",
        "explanation": "Weak governance can lead to GDPR violations, inaccurate analytics, and reputational damage."
    },
    {
        "id": 69,
        "question": "Data masking is a technique used for:",
        "options": ["Protecting sensitive data in non-production environments", "Making data more colorful", "Increasing file size", "Slowing down systems", "Deleting all data"],
        "answer": "Protecting sensitive data in non-production environments",
        "explanation": "It replaces real data with realistic fictional data for testing and development."
    },
    {
        "id": 70,
        "question": "Which of the following best describes a 'Data Owner'?",
        "options": ["The business unit leader who is accountable for the quality and use of specific data", "The person who cleans the office", "The person who makes coffee", "The person who drives the company car", "The person who answers the phone"],
        "answer": "The business unit leader who is accountable for the quality and use of specific data",
        "explanation": "Data owners define requirements and ensure data meets business needs."
    },
    {
        "id": 71,
        "question": "What is the purpose of a Data Quality Dashboard?",
        "options": ["To monitor key data quality metrics in real time", "To only show weather", "To only play music", "To only display logos", "To only count employees"],
        "answer": "To monitor key data quality metrics in real time",
        "explanation": "It provides visibility into accuracy, completeness, and other dimensions."
    },
    {
        "id": 72,
        "question": "Which international standard is commonly referenced for data management practices?",
        "options": ["ISO 8000 (Data Quality) and ISO 27001 (Information Security)", "ISO 9001 only for quality", "Only FIFA rules", "Only Olympic Charter", "Only WTO trade rules"],
        "answer": "ISO 8000 (Data Quality) and ISO 27001 (Information Security)",
        "explanation": "These standards provide frameworks for managing data quality and security."
    },
    {
        "id": 73,
        "question": "What does 'Data Democratization' mean in modern organizations?",
        "options": ["Making data accessible to more employees for decision-making", "Only giving data to the CEO", "Deleting all data", "Hiding data from everyone", "Selling data to competitors"],
        "answer": "Making data accessible to more employees for decision-making",
        "explanation": "Self-service analytics and governed data access empower broader business intelligence."
    },
    {
        "id": 74,
        "question": "Which of the following is a common data governance metric?",
        "options": ["Data quality score and compliance rate", "Number of office chairs", "Coffee consumption", "Number of meetings", "Color of walls"],
        "answer": "Data quality score and compliance rate",
        "explanation": "Organizations track these to measure the effectiveness of their governance program."
    },
    {
        "id": 75,
        "question": "What is the role of a Data Protection Officer (DPO) under GDPR?",
        "options": ["To ensure the organization complies with data protection laws", "To only design websites", "To only play games", "To only send emails", "To only print reports"],
        "answer": "To ensure the organization complies with data protection laws",
        "explanation": "Many organizations appoint a DPO to oversee privacy and data protection obligations."
    },
    {
        "id": 76,
        "question": "Data archiving is part of which data lifecycle stage?",
        "options": ["Long-term storage of inactive data that may still be needed for compliance", "Daily active use", "Real-time collection", "Immediate deletion", "Only backup"],
        "answer": "Long-term storage of inactive data that may still be needed for compliance",
        "explanation": "Archived data is moved to cheaper storage while remaining retrievable when required."
    },
    {
        "id": 77,
        "question": "Which principle states that data should be managed according to its business value and risk level?",
        "options": ["Risk-based data management", "One-size-fits-all approach", "Delete everything", "Keep everything forever", "Ignore risk"],
        "answer": "Risk-based data management",
        "explanation": "Higher-risk or high-value data receives stricter controls and monitoring."
    },
    {
        "id": 78,
        "question": "What is a common outcome of successful data governance implementation?",
        "options": ["Single source of truth and higher trust in analytics", "More paper usage", "Slower systems", "Higher costs", "Fewer insights"],
        "answer": "Single source of truth and higher trust in analytics",
        "explanation": "Organizations achieve consistency and confidence in their data assets."
    },
    {
        "id": 79,
        "question": "Which of the following is NOT a typical data governance role?",
        "options": ["Data Chef", "Data Owner", "Data Steward", "Data Custodian", "Data Governance Council"],
        "answer": "Data Chef",
        "explanation": "Common roles include Data Owner, Data Steward, Data Custodian, and the Governance Council."
    },
    {
        "id": 80,
        "question": "The ultimate success measure of a Data Governance program is:",
        "options": ["Business value created through trusted, high-quality data", "Number of meetings held", "Number of documents printed", "Number of emails sent", "Number of coffee cups used"],
        "answer": "Business value created through trusted, high-quality data",
        "explanation": "Effective governance should directly contribute to better decisions, compliance, and competitive advantage."
    }
]