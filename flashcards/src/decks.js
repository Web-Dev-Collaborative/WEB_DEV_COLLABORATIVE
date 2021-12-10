const decks = {
	"spanish": {
		"ribera": "riverbank or shore",
		"posada": "inn or lodging",
		"señaladas": "appointed, posted or marked",
		"ventura": "risky or dangerous undertaking",
		"hallar": "find (something lost), discover, or come upon",
		"ahondar": "deepend, delve into",
		"deleite": "delight, pleasure",
		"alabar": "to praise",
		"provecho": "benefit, profit, advantage",
		"animas": "soul (in purgatory), bore (as in cannon)",
		"sayete": "war tunic",
		"truhan": "shameless (adj), rascal (n)",
		"loar": "to praise, to laud",
		"holgar": "to be idle or unnecessary",
		"maña": "knack/aptitude, swindle/hustle",
		"aldea": "village or small town",
		"molienda": "mill",
		"caldero": "cauldron",
		"mozuelo": "lad (f. gal)",
		"agudeza": "sharp (both for blade or quick wit)"
	},
	"structural": {
		"Structural Design Patterns": "Structural patterns are concerned with object composition and typically identify simple ways to realize relationships between different objects. They help ensure that when one part of a system changes, the entire structure of the system doesn't need to do the same. They also assist in recasting parts of the system which don't fit a particular purpose into those that do. Patterns that fall under this category include: Decorator, Facade, Flyweight, Adapter and Proxy.",
		"Class: Adapter": "Match interfaces of different classes therefore classes can work together despite incompatible interfaces.",
		"Object: Adapter": "Match interfaces of different classes therefore classes can work together despite incompatible interfaces.",
		"Object: Bridge": "Separates an object's interface from its implementation so the two can vary independently.",
		"Object: Composite": "A structure of simple and composite objects which makes the total object more than just the sum of its parts.",
		"Object: Decorator": "Dynamically add alternate processing to objects.",
		"Object: Facade": "A single class that hides the complexity of an entire subsystem.",
		"Object: Flyweight": "A fine-grained instance used for efficient sharing of information that is contained elsewhere.",
		"Object: Proxy": "A place holder object representing the true object."
	},
	"OWASPTop10": {
		"Injection": "Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.",
		"Broken Authentication": "Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities (temporarily or permanently).",
		"Sensitive Data Exposure": "Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data deserves extra protection, such as encryption at rest or in transit, as well as special precautions when exchanged with the browser.",
		"XML External Entities (XXE)": "Many older or poorly configured XML processors evaluate external entity references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks, such as the Billion Laughs attack. ",
		"Broken Access Control": "Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access other users' accounts, view sensitive files, modify other users’ data, change access rights, etc.",
		"Security Misconfiguration": "Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure default configurations, in-complete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information. Not only must all operating systems, frameworks, libraries, and applications be securely configured, but they must also be patched/upgraded in a timely fashion. ",
		"Cross Site Scripting (XSS)": "XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create JavaScript. XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.",
		"Insecure Deserialization": "Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not result in remote code execution, they can be used to perform attacks, including replay attacks, injection attacks, and privilege escalation attacks. ",
		"Using Components with Known Vulnerabilities": "Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover. Applications and APIs using components with known vulnerabilities may undermine application defenses and enable various attacks and impacts. ",
		"Insufficient Logging and Monitoring": "Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data. Most breach studies show time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring. "
	},
	"designPatterns": {
		"Creational Design Patterns": "Creational design patterns focus on handling object creation mechanisms where objects are created in a manner suitable for the situation we're working in. The basic approach to object creation might otherwise lead to added complexity in a project whilst these patterns aim to solve this problem by controlling the creation process. Some of the patterns that fall under this category are: Constructor, Factory, Abstract, Prototype, Singleton and Builder.",
		"Structural Design Patterns": "Structural patterns are concerned with object composition and typically identify simple ways to realize relationships between different objects. They help ensure that when one part of a system changes, the entire structure of the system doesn't need to do the same. They also assist in recasting parts of the system which don't fit a particular purpose into those that do. Patterns that fall under this category include: Decorator, Facade, Flyweight, Adapter and Proxy.",
		"Behavioral Design Patterns": "Behavioral patterns focus on improving or streamlining the communication between disparate objects in a system. Some behavioral patterns include: Iterator, Mediator, Observer and Visitor."
	},
	"creational": {
		"Creational Design Patterns": "Creational design patterns focus on handling object creation mechanisms where objects are created in a manner suitable for the situation we're working in. The basic approach to object creation might otherwise lead to added complexity in a project whilst these patterns aim to solve this problem by controlling the creation process. Some of the patterns that fall under this category are: Constructor, Factory, Abstract, Prototype, Singleton and Builder.",
		"Class: Factory Method": "This makes an instance of several derived classes based on interfaced data or events.",
		"Object: Abstract Factory": "Creates an instance of several families of classes without detailing concrete classes.",
		"Object: Builder": "Separates object construction from its representation, always creates the same type of object.",
		"Object: Prototype": "A fully initialized instance used for copying or cloning.",
		"Object: Singleton": "A class with only a single instance with global access points."
	},
	"behavioral": {
		"Behavioral Design Patterns": "Behavioral patterns focus on improving or streamlining the communication between disparate objects in a system. Some behavioral patterns include: Iterator, Mediator, Observer and Visitor.",
		"Class: Interpreter": "A way to include language elements in an application to match the grammar of the intended language.",
		"Class: Template Method": "Creates the shell of an algorithm in a method, then defer the exact steps to a subclass.",
		"Object: Chain of Responsibility": "A way of passing a request between a chain of objects to find the object that can handle the request.",
		"Object: Command": "Encapsulate a command request as an object to enable, logging and/or queuing of requests, and provides error-handling for unhandled requests.",
		"Object: Iterator": "Sequentially access the elements of a collection without knowing the inner workings of the collection.",
		"Object: Mediator": "Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.",
		"Object: Memento": "Capture an object's internal state to be able to restore it later.",
		"Class: Observer": "A way of notifying change to a number of classes to ensure consistency between the classes.",
		"Class: State": "Alter an object's behavior when its state changes.",
		"Class: Strategy": "Encapsulates an algorithm inside a class separating the selection from the implementation.",
		"Class: Visitor": "Adds a new operation to a class without changing the class."
	},
	"CS Sorting and Searching": {
		"Selection Sort":"Find the smallest unsorted element in an array and exchange it with the first unsorted element of that array. Omega-Notation: Best n^2. Worst n^2.",
		"Bubble Sort":"Exchange adjacent pairs if they are out of order; effectively 'bubbling' larger elements to the right and smaller elements to the left. Omega-Notation: Best n. Worst n^2.",
		"Insertion Sort":"Traverse the array left to right shifting elements as necessary to insert each element into the right place. Omega-Notation: Best n. Worst n^2.",
		"Merge Sort":"Split the full array into subarrays then merge the subarrays back together in the right order. Omega-Notation: Best n log n. Worst n log n.",
		"Linear Search":"Iterate across the array from left to right trying to locate a target element. Omega-Notation: Best 1. Worst n.",
		"Binary Search":"Given a sorted array, divide and conquer by systematically eliminating half of the remaining elements in the search for the target element. Omega-Notation: Best 1. Worst log n.",
		"Big Omega Ω":"If we call Big O the worst case scenario, then Big Omega is the best case scenario or the super lucky scenario. A simple example: What is the best scenario in case of sorting an array of a size N using Bubble sort? The best case is if the array was already sorted! and for the Bubble sort algorithm, it takes one iteration over the array (From 0 to N-1) to find out that it is indeed sorted. Therefore Big Omega of Bubble sort is Ω(n).",
		"Big Theta Θ":"If the best case scenario and the worst case scenario are the same, then we would use the Big Theta notation instead of saying that the Big O and Big Omega of this algorithm are the same."
	}
}

export default decks
