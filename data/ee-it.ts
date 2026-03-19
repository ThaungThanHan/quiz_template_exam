import { Question } from '@/types/quiz';

// Questions - replace with your full 70 questions later
export const mockQuestions: Question[] = [
    {
        "id": 1,
        "question": "What does CPU stand for in a computer system?",
        "options": ["Central Processing Unit", "Computer Personal Unit", "Control Processing Unit", "Central Power Unit", "Core Processing Utility"],
        "answer": "Central Processing Unit",
        "explanation": "The CPU is the brain of the computer that performs calculations and executes instructions."
    },
    {
        "id": 2,
        "question": "Which of the following is an example of primary storage?",
        "options": ["RAM", "Hard Disk Drive", "USB Flash Drive", "CD-ROM", "External SSD"],
        "answer": "RAM",
        "explanation": "RAM (Random Access Memory) is volatile primary storage used for temporary data while the computer is running."
    },
    {
        "id": 3,
        "question": "What is the main function of an operating system?",
        "options": ["To manage hardware and software resources", "To only run games", "To print documents", "To connect to the internet", "To store photos"],
        "answer": "To manage hardware and software resources",
        "explanation": "The OS acts as an interface between users and hardware, managing memory, processes, files, and devices."
    },
    {
        "id": 4,
        "question": "Which device is used for input?",
        "options": ["Keyboard", "Monitor", "Printer", "Speaker", "Projector"],
        "answer": "Keyboard",
        "explanation": "Input devices like keyboard and mouse send data into the computer; output devices display or print results."
    },
    {
        "id": 5,
        "question": "What does ROM stand for and what is its key characteristic?",
        "options": ["Read Only Memory – non-volatile and cannot be easily modified", "Random Output Memory – volatile", "Read Once Memory – temporary", "Run Only Memory – for games", "Real Output Memory"],
        "answer": "Read Only Memory – non-volatile and cannot be easily modified",
        "explanation": "ROM stores permanent instructions (firmware) and retains data even when power is off."
    },
    {
        "id": 6,
        "question": "Which of the following is application software?",
        "options": ["Microsoft Word", "Windows 11", "BIOS", "Device Driver", "Antivirus firmware"],
        "answer": "Microsoft Word",
        "explanation": "Application software helps users perform specific tasks (word processing, browsing, etc.), while system software manages the computer."
    },
    {
        "id": 7,
        "question": "What is the smallest unit of data in a computer?",
        "options": ["Bit", "Byte", "Kilobyte", "Megabyte", "Gigabyte"],
        "answer": "Bit",
        "explanation": "A bit (binary digit) is the smallest unit – either 0 or 1. Eight bits make one byte."
    },
    {
        "id": 8,
        "question": "Which port is commonly used to connect a monitor to a computer?",
        "options": ["HDMI or VGA", "USB-A only", "Ethernet", "Audio jack", "Power cable"],
        "answer": "HDMI or VGA",
        "explanation": "HDMI and VGA are standard video output ports for connecting displays."
    },
    {
        "id": 9,
        "question": "What is the purpose of a motherboard?",
        "options": ["To connect all hardware components and allow communication", "Only to store data", "To display images", "To print documents", "To cool the CPU"],
        "answer": "To connect all hardware components and allow communication",
        "explanation": "The motherboard is the main circuit board that houses the CPU, RAM, and provides connections for all other components."
    },
    {
        "id": 10,
        "question": "Which of the following is a secondary storage device?",
        "options": ["Hard Disk Drive (HDD)", "RAM", "CPU Cache", "Register", "ROM"],
        "answer": "Hard Disk Drive (HDD)",
        "explanation": "Secondary storage (HDD, SSD, USB) is non-volatile and used for long-term data storage."
    },
    {
        "id": 11,
        "question": "What is Data Science primarily concerned with?",
        "options": ["Extracting insights and knowledge from data using scientific methods", "Only designing websites", "Only playing video games", "Only typing documents", "Only sending emails"],
        "answer": "Extracting insights and knowledge from data using scientific methods",
        "explanation": "Data Science combines statistics, computer science, and domain knowledge to turn raw data into actionable insights."
    },
    {
        "id": 12,
        "question": "Which of the following is NOT a core component of the Data Science lifecycle?",
        "options": ["Data Engineering", "Data Visualization", "Data Collection", "Data Analysis", "Watching movies"],
        "answer": "Watching movies",
        "explanation": "The main stages are business understanding, data collection, preparation, modeling, evaluation, and deployment."
    },
    {
        "id": 13,
        "question": "What does the term 'Big Data' refer to?",
        "options": ["Extremely large and complex data sets that traditional tools cannot handle", "Small Excel files only", "Printed documents", "Old floppy disks", "Only social media posts"],
        "answer": "Extremely large and complex data sets that traditional tools cannot handle",
        "explanation": "Big Data is characterized by the 5Vs: Volume, Velocity, Variety, Veracity, and Value."
    },
    {
        "id": 14,
        "question": "Which field combines Data Science with business decision-making?",
        "options": ["Business Intelligence (BI)", "Video Editing", "Graphic Design", "Cooking", "Sports"],
        "answer": "Business Intelligence (BI)",
        "explanation": "BI focuses on transforming data into actionable business insights through dashboards and reports."
    },
    {
        "id": 15,
        "question": "Who is considered the 'Father of Data Science'?",
        "options": ["John Tukey", "Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Elon Musk"],
        "answer": "John Tukey",
        "explanation": "Statistician John Tukey coined the term 'Data Analysis' in 1962 and laid early foundations for modern Data Science."
    },
    {
        "id": 16,
        "question": "What is primary data collection?",
        "options": ["Data gathered firsthand by the researcher (surveys, interviews, experiments)", "Data copied from the internet", "Old newspaper articles", "Government census only", "Social media likes"],
        "answer": "Data gathered firsthand by the researcher (surveys, interviews, experiments)",
        "explanation": "Primary data is original and collected directly for the specific research purpose."
    },
    {
        "id": 17,
        "question": "Which of the following is a secondary data source?",
        "options": ["Government census reports", "Your own survey results", "Personal experiment data", "Live interview recordings", "Your own lab notes"],
        "answer": "Government census reports",
        "explanation": "Secondary data is already collected and published by others (books, reports, websites, census)."
    },
    {
        "id": 18,
        "question": "What is the most common method used for online primary data collection?",
        "options": ["Online surveys and questionnaires", "Reading books", "Watching TV", "Listening to radio", "Drawing pictures"],
        "answer": "Online surveys and questionnaires",
        "explanation": "Tools like Google Forms, SurveyMonkey, and Typeform are widely used for fast, cost-effective primary data collection."
    },
    {
        "id": 19,
        "question": "Which sampling method gives every member of the population an equal chance of being selected?",
        "options": ["Simple random sampling", "Convenience sampling", "Judgmental sampling", "Snowball sampling", "Cluster sampling only"],
        "answer": "Simple random sampling",
        "explanation": "Random sampling ensures unbiased representation and is a cornerstone of good data collection."
    },
    {
        "id": 20,
        "question": "What is the main advantage of using APIs for data collection?",
        "options": ["Automated and real-time data retrieval from websites and services", "Only manual typing", "Printing only", "Drawing charts", "Sending emails"],
        "answer": "Automated and real-time data retrieval from websites and services",
        "explanation": "APIs allow programs to pull live data (weather, stock prices, social media) efficiently."
    },
    {
        "id": 21,
        "question": "What is the first step in data analysis?",
        "options": ["Data cleaning and preparation", "Buying a new computer", "Watching videos", "Eating snacks", "Drawing pictures"],
        "answer": "Data cleaning and preparation",
        "explanation": "Raw data usually contains errors, missing values, and inconsistencies that must be fixed before analysis."
    },
    {
        "id": 22,
        "question": "Which statistical measure represents the middle value in an ordered data set?",
        "options": ["Median", "Mean", "Mode", "Range", "Standard deviation"],
        "answer": "Median",
        "explanation": "The median is the middle number and is less affected by outliers than the mean."
    },
    {
        "id": 23,
        "question": "What does 'correlation' measure in data analysis?",
        "options": ["The strength and direction of the relationship between two variables", "Only the average", "Only the highest value", "Only the lowest value", "Only colors"],
        "answer": "The strength and direction of the relationship between two variables",
        "explanation": "Correlation ranges from -1 to +1; it does not imply causation."
    },
    {
        "id": 24,
        "question": "Which tool is most commonly used for data analysis in business today?",
        "options": ["Python, R, Excel, and Power BI", "Microsoft Paint", "Notepad", "Calculator only", "Facebook"],
        "answer": "Python, R, Excel, and Power BI",
        "explanation": "These tools are widely used because they handle large datasets and provide powerful visualization and modeling capabilities."
    },
    {
        "id": 25,
        "question": "What is the purpose of hypothesis testing in data analysis?",
        "options": ["To determine whether there is enough evidence to reject a null hypothesis", "To draw pictures", "To play games", "To send emails", "To cook food"],
        "answer": "To determine whether there is enough evidence to reject a null hypothesis",
        "explanation": "It helps researchers make data-driven decisions with statistical confidence."
    },
    {
        "id": 26,
        "question": "Which chart type is best for showing trends over time?",
        "options": ["Line chart", "Pie chart", "Bar chart only", "Scatter plot", "Histogram"],
        "answer": "Line chart",
        "explanation": "Line charts clearly display continuous changes and trends across time periods."
    },
    {
        "id": 27,
        "question": "What is the main purpose of a dashboard in data visualization?",
        "options": ["To provide an at-a-glance overview of key metrics and KPIs", "To only print reports", "To play music", "To watch videos", "To send messages"],
        "answer": "To provide an at-a-glance overview of key metrics and KPIs",
        "explanation": "Dashboards (Power BI, Tableau, Google Data Studio) help decision-makers monitor performance quickly."
    },
    {
        "id": 28,
        "question": "Which color scheme is generally recommended for accessibility in charts?",
        "options": ["High-contrast colors with color-blind-friendly palettes", "All red only", "All black and white", "Only pastel colors", "Rainbow colors only"],
        "answer": "High-contrast colors with color-blind-friendly palettes",
        "explanation": "Tools like ColorBrewer help create visualizations that are readable for people with color vision deficiencies."
    },
    {
        "id": 29,
        "question": "What is a histogram primarily used for?",
        "options": ["Showing the distribution and frequency of continuous data", "Comparing categories", "Showing trends over time", "Showing parts of a whole", "Showing relationships between two variables"],
        "answer": "Showing the distribution and frequency of continuous data",
        "explanation": "Histograms group continuous data into bins to reveal shape, center, and spread."
    },
    {
        "id": 30,
        "question": "Which visualization tool is known for its drag-and-drop interface and powerful interactive dashboards?",
        "options": ["Tableau", "Microsoft Word", "Notepad", "Calculator", "Paint"],
        "answer": "Tableau",
        "explanation": "Tableau is one of the leading tools for creating interactive and shareable visualizations."
    },
    {
        "id": 31,
        "question": "What is the recommended structure for a professional presentation?",
        "options": ["Introduction – Body – Conclusion", "Conclusion first then body", "Only pictures", "Only videos", "Only jokes"],
        "answer": "Introduction – Body – Conclusion",
        "explanation": "This classic structure helps the audience follow the logic and remember key points."
    },
    {
        "id": 32,
        "question": "What is the 10-20-30 rule for PowerPoint presentations?",
        "options": ["10 slides, 20 minutes, 30-point font minimum", "10 minutes only, 20 slides, 30 words", "10 colors, 20 animations, 30 images", "10 jokes, 20 laughs, 30 claps"],
        "answer": "10 slides, 20 minutes, 30-point font minimum",
        "explanation": "Guy Kawasaki’s rule ensures presentations are concise and readable from the back of the room."
    },
    {
        "id": 33,
        "question": "Which type of slide should be avoided in a professional presentation?",
        "options": ["Text-heavy slides with full paragraphs", "Simple charts and images", "One key message per slide", "Clean design with white space"],
        "answer": "Text-heavy slides with full paragraphs",
        "explanation": "Too much text on a slide distracts the audience; use bullet points and visuals instead."
    },
    {
        "id": 34,
        "question": "What is the purpose of a 'call to action' at the end of a presentation?",
        "options": ["To tell the audience exactly what you want them to do next", "To end with a joke only", "To show more slides", "To play music", "To turn off lights"],
        "answer": "To tell the audience exactly what you want them to do next",
        "explanation": "A clear call to action increases the chance that the audience will act on your message."
    },
    {
        "id": 35,
        "question": "Which software is most commonly used for creating business presentations worldwide?",
        "options": ["Microsoft PowerPoint", "Microsoft Excel only", "Notepad", "Paint", "Calculator"],
        "answer": "Microsoft PowerPoint",
        "explanation": "PowerPoint (and Google Slides) remain the standard tools for professional presentations."
    },
    {
        "id": 36,
        "question": "What does a 'cashless society' primarily mean?",
        "options": ["A society where most transactions are done digitally without physical cash", "A society with no money at all", "A society that only uses coins", "A society that prints more money", "A society that burns cash"],
        "answer": "A society where most transactions are done digitally without physical cash",
        "explanation": "Payments are made via cards, mobile apps, UPI, QR codes, and digital wallets."
    },
    {
        "id": 37,
        "question": "Which country is widely regarded as one of the most advanced cashless societies?",
        "options": ["Sweden", "Thailand", "India", "USA", "China (with Alipay & WeChat Pay)"],
        "answer": "Sweden (and China)",
        "explanation": "Sweden has reduced cash usage dramatically; China leads with mobile payments like Alipay and WeChat Pay."
    },
    {
        "id": 38,
        "question": "What is one major advantage of a cashless society?",
        "options": ["Reduced risk of theft and easier tracking of transactions", "More cash printing needed", "Higher chance of losing money", "Only paper receipts", "More counterfeiting"],
        "answer": "Reduced risk of theft and easier tracking of transactions",
        "explanation": "Digital payments leave electronic trails, helping prevent theft and aiding taxation and anti-money laundering."
    },
    {
        "id": 39,
        "question": "What is a major disadvantage of a cashless society?",
        "options": ["Digital exclusion for people without smartphones or bank accounts", "Too much physical cash needed", "Only rich people can use it", "No transactions possible", "Cash always accepted everywhere"],
        "answer": "Digital exclusion for people without smartphones or bank accounts",
        "explanation": "Elderly, rural, and low-income populations may be left behind without access to technology or banking."
    },
    {
        "id": 40,
        "question": "Which Thai payment system is a key driver toward a cashless society?",
        "options": ["PromptPay / QR Code payments", "Only cash at 7-Eleven", "Paper checks only", "Gold bars", "Foreign currency only"],
        "answer": "PromptPay / QR Code payments",
        "explanation": "Thailand’s PromptPay and widespread QR code acceptance have dramatically increased digital transactions."
    },
    {
        "id": 41,
        "question": "What does digital literacy primarily mean?",
        "options": ["The ability to use, understand, and evaluate digital technologies effectively", "Only knowing how to type", "Only playing games", "Only watching YouTube", "Only using Facebook"],
        "answer": "The ability to use, understand, and evaluate digital technologies effectively",
        "explanation": "Digital literacy includes critical thinking, safety awareness, and ethical use of technology."
    },
    {
        "id": 42,
        "question": "Which skill is considered part of digital literacy?",
        "options": ["Evaluating the credibility of online information", "Only using Microsoft Word", "Only playing online games", "Only sending emails", "Only watching Netflix"],
        "answer": "Evaluating the credibility of online information",
        "explanation": "Critical evaluation of sources (fact-checking) is a core digital literacy skill in the age of misinformation."
    },
    {
        "id": 43,
        "question": "What is one key component of digital literacy related to communication?",
        "options": ["Netiquette (proper online behavior and communication)", "Only shouting in chats", "Only using emojis", "Only typing in capital letters", "Only using slang"],
        "answer": "Netiquette (proper online behavior and communication)",
        "explanation": "Netiquette includes respectful tone, proper grammar, and understanding digital context."
    },
    {
        "id": 44,
        "question": "Which of the following is an example of digital literacy in daily life?",
        "options": ["Safely managing online privacy settings and passwords", "Sharing every photo publicly", "Clicking every link in emails", "Using the same password everywhere", "Ignoring software updates"],
        "answer": "Safely managing online privacy settings and passwords",
        "explanation": "Understanding privacy settings and using strong, unique passwords are essential digital literacy practices."
    },
    {
        "id": 45,
        "question": "What does 'information literacy' within digital literacy refer to?",
        "options": ["The ability to find, evaluate, and use information effectively from digital sources", "Only reading books", "Only watching TV", "Only listening to radio", "Only talking to friends"],
        "answer": "The ability to find, evaluate, and use information effectively from digital sources",
        "explanation": "It combines research skills with critical thinking to avoid fake news and misinformation."
    },
    {
        "id": 46,
        "question": "What is the best practice for creating a strong password?",
        "options": ["Use a long combination of letters, numbers, and symbols", "Use your name and birthdate", "Use '123456' or 'password'", "Use the same password everywhere", "Use only your phone number"],
        "answer": "Use a long combination of letters, numbers, and symbols",
        "explanation": "Strong passwords are at least 12–16 characters long and include variety to resist brute-force attacks."
    },
    {
        "id": 47,
        "question": "What is phishing?",
        "options": ["A scam where attackers trick you into giving personal information via fake emails or websites", "A type of fish", "A new social media app", "A computer game", "A type of virus only"],
        "answer": "A scam where attackers trick you into giving personal information via fake emails or websites",
        "explanation": "Phishing is one of the most common cyber threats; always verify URLs and sender addresses."
    },
    {
        "id": 48,
        "question": "What should you do if you receive a suspicious email asking for your bank details?",
        "options": ["Do not click links or reply; report it", "Immediately send your details", "Forward it to all friends", "Save it as a contact", "Reply with your password"],
        "answer": "Do not click links or reply; report it",
        "explanation": "Never share sensitive information via email. Report phishing to your IT department or authorities."
    },
    {
        "id": 49,
        "question": "Which of the following is a good digital security practice?",
        "options": ["Enable two-factor authentication (2FA) on all important accounts", "Use the same password on every website", "Never update software", "Share your password with friends", "Click every pop-up ad"],
        "answer": "Enable two-factor authentication (2FA) on all important accounts",
        "explanation": "2FA adds a second layer of protection even if your password is compromised."
    },
    {
        "id": 50,
        "question": "What is ransomware?",
        "options": ["Malware that encrypts your files and demands payment to unlock them", "A type of free software", "A new game", "A social media filter", "A photo editing app"],
        "answer": "Malware that encrypts your files and demands payment to unlock them",
        "explanation": "Ransomware is a serious threat; never pay the ransom and always keep backups."
    },
    {
        "id": 51,
        "question": "What is a variable in programming?",
        "options": ["A named storage location that holds data which can change", "A fixed number that never changes", "Only a box for numbers", "Only used in games", "Only for printing"],
        "answer": "A named storage location that holds data which can change",
        "explanation": "Variables allow programs to store and manipulate data (e.g., score = 100)."
    },
    {
        "id": 52,
        "question": "What does the term 'loop' mean in programming?",
        "options": ["Repeating a block of code multiple times", "Only printing once", "Only one calculation", "Only reading data", "Only closing the program"],
        "answer": "Repeating a block of code multiple times",
        "explanation": "Loops (for, while) are used to avoid writing the same code repeatedly."
    },
    {
        "id": 53,
        "question": "Which of the following is a popular beginner-friendly programming language?",
        "options": ["Python", "Machine language only", "Binary only", "Assembly only", "C++ only for experts"],
        "answer": "Python",
        "explanation": "Python is widely recommended for beginners because of its simple, readable syntax."
    },
    {
        "id": 54,
        "question": "What is the purpose of a function in programming?",
        "options": ["To group reusable code that performs a specific task", "Only to print hello world", "Only to close the program", "Only to draw pictures", "Only to play music"],
        "answer": "To group reusable code that performs a specific task",
        "explanation": "Functions make code cleaner and easier to maintain (e.g., def calculate_sum())."
    },
    {
        "id": 55,
        "question": "What does 'debugging' mean in programming?",
        "options": ["Finding and fixing errors (bugs) in the code", "Writing new code only", "Deleting the entire program", "Changing colors only", "Playing games"],
        "answer": "Finding and fixing errors (bugs) in the code",
        "explanation": "Debugging is an essential skill; every programmer spends time fixing bugs."
    },
    {
        "id": 56,
        "question": "What is a disruptive technology?",
        "options": ["A technology that significantly changes the way we live, work, or do business", "Only old technology", "Only a new phone case", "Only a faster charger", "Only a bigger screen"],
        "answer": "A technology that significantly changes the way we live, work, or do business",
        "explanation": "Examples include smartphones, ride-sharing apps, and streaming services."
    },
    {
        "id": 57,
        "question": "Which technology is considered disruptive because it replaced traditional taxis and created new business models?",
        "options": ["Ride-sharing apps (Uber, Grab)", "Landline telephones", "Typewriters", "Floppy disks", "Cassette tapes"],
        "answer": "Ride-sharing apps (Uber, Grab)",
        "explanation": "Uber and Grab disrupted the taxi industry by using mobile apps and GPS."
    },
    {
        "id": 58,
        "question": "What is Artificial Intelligence (AI) an example of?",
        "options": ["Disruptive technology", "Old technology only", "Only a calculator", "Only a printer", "Only a keyboard"],
        "answer": "Disruptive technology",
        "explanation": "AI is transforming industries from healthcare and finance to transportation and entertainment."
    },
    {
        "id": 59,
        "question": "Which of the following is an example of disruptive technology in finance?",
        "options": ["Blockchain and cryptocurrencies", "Paper checks only", "Cash only", "Gold coins only", "Physical bank branches only"],
        "answer": "Blockchain and cryptocurrencies",
        "explanation": "Blockchain has disrupted traditional banking and payment systems."
    },
    {
        "id": 60,
        "question": "What is Cloud Computing considered in the context of disruptive technology?",
        "options": ["It has changed how businesses store and access data without owning physical servers", "Only for playing games", "Only for printing", "Only for watching movies", "Only for sending emails"],
        "answer": "It has changed how businesses store and access data without owning physical servers",
        "explanation": "Services like AWS, Google Cloud, and Microsoft Azure have revolutionized IT infrastructure."
    }
]