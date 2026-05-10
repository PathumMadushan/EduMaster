// ─── DATA ────────────────────────────────────────────────────────────────────
const SUBJECTS = [
  {
    id: 0, name: 'Propositional Logic', icon: '📐',
    color: '#4f8ef7',
    desc: 'Propositions, connectives, truth tables, logical equivalence, predicates & quantifiers.',
    tags: ['Logic', 'Proofs', 'Predicates'],
    notes: `Propositional Logic: A proposition is a declarative sentence that is either true or false.
Logical connectives: negation (¬), conjunction (∧), disjunction (∨), implication (→), biconditional (↔).
Truth tables determine truth values of compound propositions.
Tautology: always true. Contradiction: always false.
Logical equivalence: same truth values in all cases.
De Morgan's Laws: ¬(p∨q) ≡ ¬p∧¬q and ¬(p∧q) ≡ ¬p∨¬q.
Implication p→q is false only when p is true and q is false.
Converse: q→p. Contrapositive: ¬q→¬p. Inverse: ¬p→¬q.
Predicates: P(x) is a propositional function. Quantifiers: ∀ (for all), ∃ (there exists).
Nested quantifiers: one quantifier within scope of another.
System specification translates natural language into logical expressions.
Logic circuits implement logical connectives in hardware.
Propositional equivalence: compound propositions with same truth values.
Predicate logic extends propositional logic with variables and quantifiers.`
  },
  {
    id: 1, name: 'Number Theory', icon: '🔢',
    color: '#a78bfa',
    desc: 'Divisibility, modular arithmetic, primes, GCD, congruences & Chinese Remainder Theorem.',
    tags: ['Modular', 'Primes', 'GCD'],
    notes: `Number Theory: Divisibility - a divides b (a|b) if b=ak for some integer k.
Division Algorithm: a = dq + r where 0 ≤ r < d. q is quotient, r is remainder.
Modular Arithmetic: a mod m is remainder when a divided by m.
Congruence: a ≡ b (mod m) if m divides (a-b).
Properties: if a≡b(mod m) and c≡d(mod m), then a+c≡b+d(mod m) and ac≡bd(mod m).
Prime numbers: integers greater than 1 with no divisors other than 1 and itself.
Fundamental Theorem of Arithmetic: every integer > 1 is product of primes uniquely.
GCD: greatest common divisor. LCM: least common multiple. GCD×LCM = a×b.
Euclidean Algorithm: gcd(a,b) = gcd(b, a mod b).
Chinese Remainder Theorem: system of congruences has unique solution mod product of moduli.
Linear congruence ax≡b(mod m) has solution if gcd(a,m) divides b.
Fermat's Little Theorem: if p is prime and p∤a, then a^(p-1) ≡ 1 (mod p).
Integer representations: binary, octal, hexadecimal conversions.`
  },
  {
    id: 2, name: 'Probability', icon: '🎲',
    color: '#f5c842',
    desc: 'Sample spaces, axioms, conditional probability, Bayes theorem & descriptive statistics.',
    tags: ['Bayes', 'Statistics', 'Events'],
    notes: `Probability: Sample space S is the set of all possible outcomes.
Event: subset of sample space. P(S)=1, P(∅)=0, 0≤P(A)≤1.
Axioms: P(A∪B) = P(A)+P(B)-P(A∩B) for any events A,B.
Complementary events: P(A') = 1 - P(A).
Equally likely outcomes: P(A) = |A|/|S|.
Conditional probability: P(A|B) = P(A∩B)/P(B).
Multiplication rule: P(A∩B) = P(A|B)·P(B).
Independent events: P(A∩B) = P(A)·P(B).
Bayes Theorem: P(A|B) = P(B|A)·P(A) / P(B).
Descriptive statistics: mean, median, mode, variance, standard deviation.
Mean = sum of observations / number of observations.
Variance = average of squared deviations from mean.
Standard deviation = square root of variance.
Inferential statistics uses samples to make inferences about populations.
Population vs Sample: population is complete set; sample is subset.`
  },
  {
    id: 3, name: 'Sets & Relations', icon: '🔗',
    color: '#22d3a0',
    desc: 'Set representation, subsets, power sets, Cartesian product, binary relations & properties.',
    tags: ['Sets', 'Relations', 'Venn'],
    notes: `Sets & Relations: A set is a collection of distinct objects.
Representation: descriptive, listing elements, Venn diagram, set-builder notation.
A = {x : P(x)} is set-builder form.
Subset: B⊆A if every element of B is in A. Proper subset: B⊂A if B⊆A and B≠A.
Power Set P(A): set of all subsets. If |A|=n then |P(A)|=2^n.
Universal set U: contains all elements under consideration.
Empty set ∅: has no elements. ∅⊆A for all sets A.
Set operations: union A∪B, intersection A∩B, difference A-B, complement A'.
De Morgan's: (A∪B)' = A'∩B' and (A∩B)' = A'∪B'.
Cartesian product: A×B = {(a,b) : a∈A, b∈B}. |A×B| = |A|·|B|.
Binary relation R on A×B: subset of Cartesian product.
Reflexive: (a,a)∈R for all a. Symmetric: (a,b)∈R implies (b,a)∈R.
Antisymmetric: (a,b)∈R and (b,a)∈R implies a=b. Transitive: (a,b)∈R and (b,c)∈R implies (a,c)∈R.
Equivalence relation: reflexive, symmetric, and transitive.
Partial order: reflexive, antisymmetric, and transitive.`
  },
  {
    id: 4, name: 'Graph Theory', icon: '🌐',
    color: '#f87171',
    desc: 'Vertices, edges, degrees, paths, cycles, digraphs & Eulerian/Hamiltonian graphs.',
    tags: ['Graphs', 'Paths', 'Cycles'],
    notes: `Graph Theory: A graph G=(V,E) consists of vertices V and edges E.
Undirected graph: edges have no direction. Directed graph (digraph): edges have direction.
Simple graph: no loops or multiple edges. Multigraph: allows multiple edges.
Degree of vertex v: number of edges incident to v. Sum of all degrees = 2|E|.
In-degree: edges entering vertex in digraph. Out-degree: edges leaving vertex.
Sum of in-degrees = sum of out-degrees = number of directed edges.
Path: sequence of vertices connected by edges with no repeated vertices.
Cycle: path that starts and ends at same vertex.
Connected graph: there is a path between every pair of vertices.
Euler path: visits every edge exactly once. Exists if exactly 0 or 2 vertices of odd degree.
Euler circuit: Euler path that starts and ends at same vertex. All vertices must have even degree.
Hamiltonian path: visits every vertex exactly once.
Hamiltonian circuit: Hamiltonian path returning to start.
Complete graph K_n: every pair of vertices connected. Has n(n-1)/2 edges.
Bipartite graph: vertices divided into two sets with edges only between sets.`
  },
  {
    id: 5, name: 'Nested Quantifiers', icon: '🔣',
    color: '#fb923c',
    desc: 'Nested universal and existential quantifiers, order matters, negation & translations.',
    tags: ['∀', '∃', 'Quantifiers'],
    notes: `Nested Quantifiers: Two quantifiers nested if one is within scope of another.
Universal quantifier ∀x P(x): P(x) is true for all x in domain.
Existential quantifier ∃x P(x): there exists x in domain where P(x) is true.
Nested example: ∀x∃y(x+y=0) means for every x there exists y such that x+y=0.
Order matters for mixed quantifiers: ∀x∃y P(x,y) ≠ ∃y∀x P(x,y) in general.
Order of nested universal quantifiers can be swapped without changing meaning.
Order of nested existential quantifiers can be swapped without changing meaning.
Negation of quantifiers: ¬∀x P(x) ≡ ∃x ¬P(x). ¬∃x P(x) ≡ ∀x ¬P(x).
Translation: ∀x∀y(x+y=y+x) means for all real x and y, x+y=y+x.
∃x∃y(xy=6) means there exist integers x and y such that xy=6.
Uniqueness quantifier ∃! x P(x): exactly one x satisfies P(x).
Bounded quantifiers restrict domain: ∀x>0 P(x), ∃x<5 P(x).
Free variable: not bound by any quantifier. Bound variable: bound by a quantifier.`
  },
  {
    id: 6, name: 'Counting Techniques', icon: '🧮',
    color: '#34d399',
    desc: 'Product rule, sum rule, permutations, combinations, pigeonhole & inclusion-exclusion.',
    tags: ['Permutations', 'Combinations', 'Pigeonhole'],
    notes: `Counting Techniques: Product Rule - if task has n1 ways then n2 ways, total = n1×n2.
Sum Rule: if task done in n1 OR n2 ways (no overlap), total = n1+n2.
Subtraction Rule (Inclusion-Exclusion): |A∪B| = |A|+|B|-|A∩B|.
Division Rule: if n ways do task and d ways are same outcome, distinct ways = n/d.
Permutation: ordered arrangement. P(n,r) = n!/(n-r)!.
Combination: unordered selection. C(n,r) = n!/(r!(n-r)!). Also written as C(n,r) or nCr.
Binomial Theorem: (x+y)^n = Σ C(n,k) x^(n-k) y^k.
Pigeonhole Principle: if n+1 objects in n boxes, at least one box has ≥2 objects.
Generalized Pigeonhole: if N objects in k boxes, some box has ≥⌈N/k⌉ objects.
Permutations with repetition: n^r ways to arrange r items from n with repetition.
Combinations with repetition: C(n+r-1,r) ways to choose r from n with repetition.
Multinomial: n!/(n1!n2!...nk!) arrangements of n objects with repetitions n1,n2,...nk.
Inclusion-Exclusion for 3 sets: |A∪B∪C|=|A|+|B|+|C|-|A∩B|-|A∩C|-|B∩C|+|A∩B∩C|.`
  },
  {
    id: 7, name: 'Mixed Questions', icon: '📝',
    color: '#60a5fa',
    desc: 'Mixed advanced Discrete Mathematics practice from all topics.',
    tags: ['Mixed', 'Exam', 'Advanced'],
    notes: `Mixed Questions: A shuffled exam-style set covering propositional logic, functions, divisibility, modular arithmetic, graphs, sets, probability, relations, counting techniques, and quantifiers.`
  }
];

// ─── EXTERNAL MODULE SUBJECTS ──────────────────────────────────────────────
SUBJECTS[8] = {
    id: 8, name: 'Academic Grooming Introduction', icon: '📘',
    color: '#f97316',
    desc: 'Foundations of academic grooming, expectations, and professional classroom habits.',
    tags: ['Academics', 'Grooming', 'Introduction'],
    notes: `Academic Grooming Introduction: Academic grooming is the set of habits, behaviors, and attitudes that support effective study and professional growth.
It includes punctuality, discipline, proper communication, note-taking, self-management, and respect for academic standards.
Students should understand course expectations, assessment criteria, deadlines, and ethical conduct.
Good academic grooming supports confidence, consistent performance, and readiness for higher-level study and work environments.
It also includes digital readiness, organized study materials, and the ability to adapt to feedback.`
  };
SUBJECTS[9] = {
    id: 9, name: 'Key Skills and Issues', icon: '🧩',
    color: '#14b8a6',
    desc: 'Core study skills, workplace readiness, and common issues that affect academic progress.',
    tags: ['Skills', 'Issues', 'Study'],
    notes: `Key Skills and Issues: Key academic skills include reading, writing, listening, speaking, note-making, time management, teamwork, and problem solving.
Important issues may include procrastination, stress, poor attendance, weak motivation, and ineffective study habits.
Students should identify personal strengths and weaknesses, then build routines that improve consistency.
Communication, self-discipline, and digital literacy are also important for success.
Managing distractions and seeking help early can reduce many common academic issues.`
  };
SUBJECTS[10] = {
    id: 10, name: 'Analysis Sources', icon: '🔎',
    color: '#22c55e',
    desc: 'Finding, comparing, and evaluating sources for trustworthy academic analysis.',
    tags: ['Sources', 'Research', 'Evaluation'],
    notes: `Analysis Sources: Academic analysis often begins with collecting sources such as books, journal articles, reports, websites, interviews, and case studies.
Sources should be checked for credibility, author expertise, publication date, purpose, and bias.
Primary sources provide original evidence, while secondary sources interpret or summarize existing work.
Students should compare multiple sources to identify patterns, disagreements, and gaps in information.
Good source analysis helps build accurate arguments and avoids unsupported claims.`
  };
SUBJECTS[11] = {
    id: 11, name: 'Report Writing', icon: '📝',
    color: '#f59e0b',
    desc: 'Planning, structuring, and presenting clear academic reports.',
    tags: ['Writing', 'Reports', 'Structure'],
    notes: `Report Writing: A report is a structured document that presents information, analysis, and recommendations in a clear format.
Typical report sections include title, introduction, method, findings, discussion, conclusion, and references.
Good report writing uses formal language, logical flow, headings, and concise paragraphs.
Evidence should be organized clearly and supported by citations where required.
Reports should answer the purpose of the task and make conclusions easy to understand.`
  };
SUBJECTS[12] = {
    id: 12, name: 'Critical Evaluation', icon: '🧠',
    color: '#a855f7',
    desc: 'Judging ideas and evidence carefully using balanced academic reasoning.',
    tags: ['Critical Thinking', 'Evaluation', 'Reasoning'],
    notes: `Critical Evaluation: Critical evaluation means examining evidence carefully, not just describing it.
It asks whether arguments are valid, evidence is reliable, and conclusions are justified.
Students should consider strengths, limitations, assumptions, and alternative viewpoints.
Evaluation compares ideas using criteria such as relevance, accuracy, depth, and consistency.
Strong critical evaluation leads to clearer conclusions and better academic decisions.`
  };
SUBJECTS[13] = {
    id: 13, name: 'Sample Research', icon: '📄',
    color: '#0ea5e9',
    desc: 'Understanding sample research design, participants, and data collection basics.',
    tags: ['Research', 'Sample', 'Method'],
    notes: `Sample Research: A sample is a smaller group selected from a larger population for study.
Research samples should be chosen in a way that supports fairness, relevance, and reliability.
Common sampling methods include random sampling, stratified sampling, and convenience sampling.
The sample should represent the population as well as possible so results can be generalized carefully.
Researchers must explain sample size, selection method, and limitations in the final report.`
  };
SUBJECTS[14] = {
    id: 14, name: 'Oral Presentation', icon: '🎤',
    color: '#ec4899',
    desc: 'Delivering clear, confident, and well-structured spoken presentations.',
    tags: ['Speaking', 'Presentation', 'Delivery'],
    notes: `Oral Presentation: Oral presentation is the spoken delivery of information to an audience.
Effective presentations have a clear introduction, organized body, and strong conclusion.
Good delivery includes voice control, eye contact, body language, pacing, and audience awareness.
Visual aids should support the message without distracting from it.
Preparation, rehearsal, and handling questions well are important for a successful presentation.`
  };
SUBJECTS[15] = {
    id: 15, name: 'Basics of Algorithms', icon: '📚',
    color: '#8b5cf6',
    desc: 'Algorithm definition, properties, design paradigms, and complexity basics.',
    tags: ['Algorithms', 'Fundamentals', 'Design'],
    notes: `Basics of Algorithms: An algorithm is a step-by-step procedure to solve a problem or perform a computation.
Good algorithms should be clear, finite, efficient, and correct.
Algorithm design paradigms include divide-and-conquer, dynamic programming, and greedy algorithms.
Pseudocode is used to describe algorithms in a language-independent way.
Understanding algorithm fundamentals is essential before analyzing or optimizing them.`
  };
SUBJECTS[16] = {
    id: 16, name: 'Algorithm Analysis', icon: '📊',
    color: '#06b6d4',
    desc: 'Time complexity, space complexity, Big-O notation, and performance evaluation.',
    tags: ['Complexity', 'Analysis', 'Performance'],
    notes: `Algorithm Analysis: Complexity analysis measures how algorithm performance scales with input size.
Time complexity describes how running time grows (O(1), O(n), O(n²), O(log n), etc.).
Space complexity measures memory usage relative to input size.
Big-O notation provides upper bounds; Big-Theta for tight bounds; Big-Omega for lower bounds.
Analyzing algorithms helps choose the most efficient solution for a problem.`
  };
SUBJECTS[17] = {
    id: 17, name: 'Sorting Algorithms', icon: '↕️',
    color: '#f59e0b',
    desc: 'Bubble, selection, insertion, merge sort, quicksort, heapsort, and counting sort.',
    tags: ['Sorting', 'Algorithms', 'Comparison'],
    notes: `Sorting Algorithms: Sorting arranges data in order (ascending or descending).
Comparison sorts: Bubble Sort O(n²), Selection Sort O(n²), Insertion Sort O(n²), Merge Sort O(n log n), Quick Sort avg O(n log n).
Non-comparison sorts: Counting Sort, Radix Sort work in O(n) time for specific data types.
Stability matters: some sorts preserve relative order of equal elements.
Choose sorting algorithms based on data size, nature, and performance requirements.`
  };
SUBJECTS[18] = {
    id: 18, name: 'Searching', icon: '🔍',
    color: '#10b981',
    desc: 'Linear search, binary search, and other searching techniques.',
    tags: ['Search', 'Algorithms', 'Optimization'],
    notes: `Searching Algorithms: Searching finds if an element exists in a collection.
Linear search O(n) checks each element sequentially; works on any data.
Binary search O(log n) works on sorted data by dividing search space repeatedly.
Interpolation search and exponential search are variants for specific scenarios.
Choose search based on data organization and frequency of searches.`
  };
SUBJECTS[19] = {
    id: 19, name: 'Linked Lists', icon: '🔗',
    color: '#ec4899',
    desc: 'Singly linked, doubly linked, circular lists, operations, and applications.',
    tags: ['Data Structures', 'Linked Lists', 'Nodes'],
    notes: `Linked Lists: A linked list is a linear data structure where elements (nodes) are linked via pointers.
Singly linked: each node has data and pointer to next node.
Doubly linked: nodes have pointers to both next and previous nodes.
Circular linked: last node points to first node.
Operations: insertion O(1) at known position, deletion O(1), search O(n), traversal O(n).`
  };
SUBJECTS[20] = {
    id: 20, name: 'Trees', icon: '🌳',
    color: '#8b5cf6',
    desc: 'Binary trees, BSTs, AVL trees, heaps, tree traversals, and applications.',
    tags: ['Trees', 'Hierarchical', 'Traversal'],
    notes: `Trees: A tree is a hierarchical data structure with a root and child nodes.
Binary trees: each node has at most 2 children.
Binary Search Trees (BST): left child < parent < right child; search O(log n) average.
AVL trees and Red-Black trees: self-balancing BSTs maintaining O(log n) operations.
Tree traversals: In-order, Pre-order, Post-order (DFS); Level-order (BFS).
Heaps: complete binary trees used for priority queues and sorting.`
  };
SUBJECTS[21] = {
    id: 21, name: 'Introduction to Computer Architecture', icon: '🏗️',
    color: '#4f8ef7',
    desc: 'Basic concepts of computer architecture, components, and organization.',
    tags: ['Architecture', 'Hardware', 'Basics'],
    notes: `Introduction to Computer Architecture: Computer architecture refers to the design and organization of computer systems.
Key components: CPU, memory, I/O devices, buses.
Von Neumann architecture: stored-program concept, sequential execution.
Harvard architecture: separate instruction and data memories.
Performance metrics: throughput, latency, bandwidth.
Levels of abstraction: hardware, microarchitecture, ISA, OS, application.`
  };
SUBJECTS[22] = {
    id: 22, name: 'Number System', icon: '🔢',
    color: '#a78bfa',
    desc: 'Binary, octal, hexadecimal systems, conversions, and arithmetic.',
    tags: ['Number Systems', 'Binary', 'Conversions'],
    notes: `Number Systems: Computers use binary (base 2) internally.
Decimal (base 10), Binary (base 2), Octal (base 8), Hexadecimal (base 16).
Conversions: binary to decimal, decimal to binary, hex to binary, etc.
Binary arithmetic: addition, subtraction, multiplication, division.
Two's complement for negative numbers.
Floating-point representation: IEEE 754 standard.
BCD (Binary Coded Decimal) for decimal representation.`
  };
SUBJECTS[23] = {
    id: 23, name: 'Boolean Logic and Circuit Fundamentals', icon: '🔌',
    color: '#f5c842',
    desc: 'Logic gates, Boolean algebra, truth tables, and basic circuits.',
    tags: ['Logic Gates', 'Boolean Algebra', 'Circuits'],
    notes: `Boolean Logic and Circuit Fundamentals: Boolean algebra deals with true/false values.
Basic gates: AND, OR, NOT, NAND, NOR, XOR, XNOR.
Truth tables define gate behavior.
Boolean expressions and Karnaugh maps for simplification.
Combinational circuits: adders, multiplexers, decoders.
Sequential circuits: flip-flops, registers, counters.
Timing diagrams and propagation delay.`
  };
SUBJECTS[24] = {
    id: 24, name: 'Introduction to K Map', icon: '🗺️',
    color: '#10b981',
    desc: 'Karnaugh maps for Boolean function minimization.',
    tags: ['K-Map', 'Minimization', 'Logic'],
    notes: `Introduction to K Map: Karnaugh maps (K-maps) simplify Boolean expressions.
2-variable, 3-variable, 4-variable K-maps.
Grouping adjacent 1s to eliminate variables.
Don't care conditions for further minimization.
Sum of products (SOP) and product of sums (POS) forms.
Applications in digital circuit design.`
  };
SUBJECTS[25] = {
    id: 25, name: 'Introduction to Level Parallelism', icon: '⚡',
    color: '#ec4899',
    desc: 'Instruction-level parallelism, pipelining, and superscalar architectures.',
    tags: ['Parallelism', 'ILP', 'Pipelining'],
    notes: `Introduction to Level Parallelism: Instruction-Level Parallelism (ILP) executes multiple instructions simultaneously.
Pipelining: divides instruction execution into stages.
Superscalar: multiple execution units.
Data dependencies: RAW, WAR, WAW hazards.
Branch prediction and speculative execution.
Out-of-order execution and register renaming.`
  };
SUBJECTS[26] = {
    id: 26, name: 'Pipe Lining', icon: '🔧',
    color: '#f59e0b',
    desc: 'Pipeline architecture, hazards, and performance optimization.',
    tags: ['Pipelining', 'Hazards', 'Performance'],
    notes: `Pipe Lining: Pipelining improves CPU performance by overlapping instruction execution.
Stages: Fetch, Decode, Execute, Memory, Writeback.
Hazards: structural, data, control.
Forwarding and stalling to resolve hazards.
Branch prediction: static and dynamic methods.
Pipeline depth and throughput calculation.`
  };
SUBJECTS[27] = {
    id: 27, name: 'Introduction to MIPS Processor Architecture', icon: '🖥️',
    color: '#8b5cf6',
    desc: 'MIPS instruction set, assembly programming, and architecture.',
    tags: ['MIPS', 'Assembly', 'ISA'],
    notes: `Introduction to MIPS Processor Architecture: MIPS is a RISC instruction set architecture.
32-bit and 64-bit variants.
Instruction formats: R-type, I-type, J-type.
Registers: 32 general-purpose registers.
MIPS assembly programming basics.
Load/store architecture and addressing modes.`
  };
SUBJECTS[28] = {
    id: 28, name: 'Digital Building Blocks and Architecture of Digital Computer', icon: '🏛️',
    color: '#22d3a0',
    desc: 'Digital components, ALU, memory, and computer organization.',
    tags: ['Digital Systems', 'ALU', 'Memory'],
    notes: `Digital Building Blocks and Architecture of Digital Computer: Basic digital components: gates, flip-flops, registers.
ALU (Arithmetic Logic Unit) performs arithmetic and logic operations.
Memory hierarchy: registers, cache, main memory, secondary storage.
Control unit coordinates operations.
Bus systems: data bus, address bus, control bus.
Von Neumann vs Harvard architectures.`
  };
SUBJECTS[29] = {
    id: 29, name: 'Control Unit Design', icon: '🎛️',
    color: '#f87171',
    desc: 'Control unit implementation, hardwired and microprogrammed control.',
    tags: ['Control Unit', 'FSM', 'Microprogramming'],
    notes: `Control Unit Design: Control unit generates control signals for instruction execution.
Hardwired control: uses combinational logic and FSM.
Microprogrammed control: uses microinstructions stored in ROM.
Control signals for ALU, memory, registers.
Instruction cycle: fetch, decode, execute.
Exception and interrupt handling.`
  };
SUBJECTS[30] = {
    id: 30, name: 'Combinational and Sequential Circuit', icon: '⚙️',
    color: '#06b6d4',
    desc: 'Design and analysis of combinational and sequential circuits.',
    tags: ['Circuits', 'Sequential', 'Design'],
    notes: `Combinational and Sequential Circuit: Combinational circuits: output depends only on current inputs.
Examples: adders, multiplexers, decoders.
Sequential circuits: output depends on inputs and state.
Examples: counters, registers, FSMs.
State diagrams and state tables.
Synchronous vs asynchronous circuits.
Timing analysis and race conditions.`
  };
SUBJECTS[31] = {
    id: 31, name: 'Multi Tasking and Multi Processing', icon: '🔄',
    color: '#84cc16',
    desc: 'Multitasking, multiprocessing, and parallel computing concepts.',
    tags: ['Multitasking', 'Multiprocessing', 'Concurrency'],
    notes: `Multi Tasking and Multi Processing: Multitasking: multiple tasks share CPU time.
Processes and threads.
Multiprocessing: multiple CPUs or cores.
Symmetric multiprocessing (SMP) and asymmetric.
Parallel computing: Flynn's taxonomy (SISD, SIMD, MISD, MIMD).
Amdahl's law for parallel speedup.
Synchronization and communication between processes.`
  };
SUBJECTS[32] = {
    id: 32, name: 'Introduction to Database System', icon: '📘',
    color: '#ef4444',
    desc: 'Fundamentals of database systems, DBMS functions, and system components.',
    tags: ['Database', 'DBMS', 'Introduction'],
    notes: `Introduction to Database System: A database is an organized collection of related data stored for efficient retrieval and management.
A Database Management System (DBMS) is software that provides data storage, retrieval, update, and administration services.
Key DBMS functions include data definition, data manipulation, security, backup, recovery, and concurrency control.
Advantages of DBMS: reduced data redundancy, improved data integrity, centralized data management, and data sharing.
Database users include DBAs, application programmers, and end users.
Data independence separates physical storage from logical data structures.
Database schemas define structure; instances represent data at a moment in time.
Database models describe how data is organized and related.`
  };
SUBJECTS[33] = {
    id: 33, name: 'Database Architecture and Data Models', icon: '🏛️',
    color: '#dc2626',
    desc: 'Database system architecture, schemas, and common data model types.',
    tags: ['Architecture', 'Data Models', 'Schemas'],
    notes: `Database Architecture and Data Models: Database architecture describes how components such as DBMS, storage, and applications interact.
Three-level architecture includes internal, conceptual, and external levels.
Internal level defines physical storage; conceptual level defines logical structure; external level defines user views.
Data models represent data organization: hierarchical, network, relational, and object-oriented models.
The relational model uses tables, rows, columns, primary keys, and foreign keys.
Entity-relationship (ER) models describe entities, attributes, and relationships.
Schema and subschema define formal structures and user-specific views.
Data independence enables changes in internal organization without affecting external applications.`
  };
SUBJECTS[34] = {
    id: 34, name: 'ER Models', icon: '🗂️',
    color: '#b91c1c',
    desc: 'Entity-Relationship modeling, entities, relationships, attributes, and constraints.',
    tags: ['ER Diagram', 'Entities', 'Relationships'],
    notes: `ER Models: Entity-Relationship (ER) models describe data requirements using entities, attributes, and relationships.
An entity is a real-world object or concept; an entity set groups similar entities.
Attributes describe entity properties; key attributes uniquely identify entity instances.
Relationships link entities and can be one-to-one, one-to-many, or many-to-many.
Weak entities depend on strong entities and are identified by partial keys.
Cardinality and participation constraints define how entities relate.
ER diagrams visually represent entities, relationships, attributes, and keys.
ER modeling is often used before converting designs to relational schemas.`
  };
SUBJECTS[35] = {
    id: 35, name: 'Relational Database Model', icon: '🧩',
    color: '#f43f5e',
    desc: 'Relational model concepts, tables, keys, integrity rules, and normalization basics.',
    tags: ['Relational', 'Tables', 'Keys'],
    notes: `Relational Database Model: The relational model organizes data into tables (relations) with rows (tuples) and columns (attributes).
Each table has a primary key that uniquely identifies each row.
Foreign keys establish relationships between tables and enforce referential integrity.
Relational algebra defines operations like selection, projection, join, union, intersection, and difference.
Integrity rules include entity integrity (primary key not null) and referential integrity (foreign keys must match primary keys).
Normalization reduces redundancy and improves consistency by organizing tables.
SQL is the standard language used to define, manipulate, and query relational databases.
Views provide virtual tables built from queries.`
  };
SUBJECTS[36] = {
    id: 36, name: 'Normalization', icon: '📐',
    color: '#f87171',
    desc: 'Normal forms, functional dependencies, and eliminating redundancy.',
    tags: ['Normalization', 'FDs', 'Normal Forms'],
    notes: `Normalization: Normalization organizes database tables to reduce redundancy and update anomalies.
Functional dependency means an attribute is determined by another attribute or group of attributes.
First Normal Form (1NF): attributes must be atomic, with no repeating groups.
Second Normal Form (2NF): table in 1NF and every non-key attribute fully depends on the primary key.
Third Normal Form (3NF): table in 2NF and no transitive dependencies for non-key attributes.
Boyce-Codd Normal Form (BCNF): every determinant is a candidate key.
Higher normal forms include 4NF and 5NF for multi-valued and join dependencies.
Normalization balances redundancy reduction with query performance.`
  };
SUBJECTS[38] = {
    id: 38, name: 'Introduction to Computer Systems', icon: '💻',
    color: '#4f8ef7',
    desc: 'Overview of computer systems, components, and basic concepts.',
    tags: ['Computers', 'Systems', 'Basics'],
    notes: `Introduction to Computer Systems: A computer system consists of hardware and software working together to process data and perform tasks.
Hardware includes physical components like CPU, memory, storage, input/output devices.
Software includes operating systems, applications, and programming languages.
Computer systems process data through input, processing, output, and storage cycles.
Key concepts include data representation, algorithms, programming, and system architecture.
Understanding computer systems helps in using technology effectively and developing software.`
  };
SUBJECTS[39] = {
    id: 39, name: 'History and Evolution of Computers', icon: '🕰️',
    color: '#a78bfa',
    desc: 'Development of computers from early mechanical devices to modern digital systems.',
    tags: ['History', 'Evolution', 'Timeline'],
    notes: `History and Evolution of Computers: Early computing devices include abacus, mechanical calculators by Pascal and Leibniz.
Charles Babbage designed the Analytical Engine in 1837, considered the first programmable computer.
Ada Lovelace wrote the first computer program for Babbage's machine.
ENIAC (1945) was the first electronic general-purpose computer.
Transistor invention (1947) led to smaller, more reliable computers.
Integrated circuits (1958) enabled microprocessors and personal computers.
Internet development in 1960s-70s connected computers globally.
Modern computers include desktops, laptops, smartphones, and cloud computing.`
  };
SUBJECTS[40] = {
    id: 40, name: 'Computer Hardware Fundamentals', icon: '🖥️',
    color: '#f5c842',
    desc: 'Core hardware components: CPU, memory, storage, I/O devices, and system architecture.',
    tags: ['Hardware', 'CPU', 'Memory'],
    notes: `Computer Hardware Fundamentals: Central Processing Unit (CPU) executes instructions and performs calculations.
Memory (RAM) temporarily stores data and programs for quick access by CPU.
Storage devices (HDD, SSD) provide permanent data storage.
Input devices (keyboard, mouse) allow user interaction.
Output devices (monitor, printer) display or produce results.
Motherboard connects all components and facilitates communication.
Power supply provides electrical power to components.
System architecture includes von Neumann architecture with stored-program concept.`
  };
SUBJECTS[41] = {
    id: 41, name: 'Memory Systems', icon: '🧠',
    color: '#22d3a0',
    desc: 'Types of memory, hierarchy, cache, virtual memory, and memory management.',
    tags: ['Memory', 'Cache', 'Virtual'],
    notes: `Memory Systems: Memory hierarchy includes registers, cache, RAM, and secondary storage.
Registers are fastest but smallest memory in CPU.
Cache memory (L1, L2, L3) speeds up data access between CPU and RAM.
Random Access Memory (RAM) is volatile and used for running programs.
Read-Only Memory (ROM) contains permanent instructions for booting.
Virtual memory extends RAM using disk space as additional memory.
Memory management techniques include paging and segmentation.
Memory allocation strategies: first-fit, best-fit, worst-fit.`
  };
SUBJECTS[42] = {
    id: 42, name: 'Computer Software Fundamentals', icon: '📱',
    color: '#f87171',
    desc: 'Software types, development process, programming languages, and software engineering.',
    tags: ['Software', 'Programming', 'Languages'],
    notes: `Computer Software Fundamentals: System software manages hardware and provides platform for applications.
Application software performs specific user tasks (word processors, games).
Programming languages: low-level (assembly) vs high-level (Python, Java).
Software development life cycle: planning, analysis, design, implementation, testing, maintenance.
Software engineering principles: modularity, abstraction, reusability.
Compilers translate high-level code to machine language.
Interpreters execute code line-by-line.
Debugging finds and fixes program errors.`
  };
SUBJECTS[43] = {
    id: 43, name: 'Operating Systems', icon: '⚙️',
    color: '#14b8a6',
    desc: 'OS functions, process management, memory management, file systems, and security.',
    tags: ['OS', 'Processes', 'Files'],
    notes: `Operating Systems: Operating system manages computer hardware and software resources.
Functions: process management, memory management, file system, I/O operations, security.
Process states: new, ready, running, waiting, terminated.
Scheduling algorithms: FCFS, SJF, Round Robin, priority scheduling.
Memory management: allocation, deallocation, protection.
File systems organize and store data on storage devices.
Device drivers enable communication between OS and hardware.
Security features: user authentication, access control, encryption.`
  };
SUBJECTS[44] = {
    id: 44, name: 'Programming Fundamentals', icon: '⌨️',
    color: '#22c55e',
    desc: 'Basic programming concepts: variables, data types, control structures, functions.',
    tags: ['Programming', 'Variables', 'Functions'],
    notes: `Programming Fundamentals: Programming is writing instructions for computers to execute tasks.
Variables store data values that can change during program execution.
Data types: integers, floats, strings, booleans, arrays, objects.
Control structures: sequential execution, selection (if-else), iteration (loops).
Functions are reusable code blocks that perform specific tasks.
Algorithms are step-by-step procedures to solve problems.
Debugging identifies and fixes errors in code.
Good programming practices: comments, indentation, meaningful names.`
  };
SUBJECTS[45] = {
    id: 45, name: 'Data Representation', icon: '🔢',
    color: '#f59e0b',
    desc: 'How data is represented in computers: binary, ASCII, images, sound, compression.',
    tags: ['Binary', 'ASCII', 'Compression'],
    notes: `Data Representation: Computers use binary system (0s and 1s) to represent all data.
Bits and bytes: 8 bits = 1 byte.
Number systems: binary, decimal, hexadecimal conversions.
ASCII represents text characters using 7-bit codes.
Unicode supports international characters.
Images stored as pixels with color values (RGB).
Sound represented as analog-to-digital conversion (sampling).
Data compression reduces file size: lossless (ZIP) vs lossy (JPEG).
Error detection: parity bits, checksums.`
  };
SUBJECTS[46] = {
    id: 46, name: 'Computer Networks Basics', icon: '🌐',
    color: '#a855f7',
    desc: 'Network fundamentals, protocols, internet, security, and wireless networks.',
    tags: ['Networks', 'Internet', 'Protocols'],
    notes: `Computer Networks Basics: Networks connect computers for resource sharing and communication.
Network types: LAN (local), WAN (wide), MAN (metropolitan).
Network topologies: star, bus, ring, mesh.
TCP/IP protocol suite: TCP (reliable transport), IP (addressing).
HTTP/HTTPS for web communication.
Network devices: routers, switches, hubs, modems.
IP addresses identify devices on networks.
DNS translates domain names to IP addresses.
Wireless networks: Wi-Fi, Bluetooth, cellular.`
  };
SUBJECTS[47] = {
    id: 47, name: 'Security and Ethical Issues', icon: '🔒',
    color: '#ef4444',
    desc: 'Computer security threats, ethical computing, privacy, and legal issues.',
    tags: ['Security', 'Ethics', 'Privacy'],
    notes: `Security and Ethical Issues: Computer security protects systems from unauthorized access and damage.
Common threats: viruses, malware, phishing, hacking, denial-of-service.
Security measures: passwords, encryption, firewalls, antivirus software.
Ethical issues: software piracy, plagiarism, hacking, privacy invasion.
Legal aspects: copyright, intellectual property, data protection laws.
Privacy concerns: data collection, surveillance, identity theft.
Cyber ethics: responsible use of technology, digital citizenship.
Risk assessment and management in computing environments.`
  };
SUBJECTS[48] = {
    id: 48, name: 'Introduction to Data Communication', icon: '📡',
    color: '#0ea5e9',
    desc: 'Basics of data transfer systems, signal types, and communication concepts.',
    tags: ['Data', 'Communication', 'Signals'],
    notes: `Introduction to Data Communication: Data communication is the transfer of data between sender and receiver through a transmission medium.
Key elements include sender, receiver, message, medium, protocol, and noise.
Data may be analog or digital; signals carry it over channels.
Communication modes include simplex, half-duplex, and full-duplex.
Protocols define rules for formatting and transmitting data.
Bandwidth is the capacity of a channel to carry information.
Noise reduces signal quality and can cause errors in transmission.`
  };
SUBJECTS[49] = {
    id: 49, name: 'Network Types and Topologies', icon: '🌐',
    color: '#22c55e',
    desc: 'Classification of networks and physical layouts used for connecting devices.',
    tags: ['LAN', 'WAN', 'Topology'],
    notes: `Network Types and Topologies: Networks are classified by size and range, such as PAN, LAN, MAN, and WAN.
Topology describes the physical or logical arrangement of nodes in a network.
Common topologies include bus, star, ring, mesh, and hybrid.
Choice of topology influences performance, fault tolerance, and cable cost.
Network types support sharing of resources, data, and applications across connected devices.`
  };
SUBJECTS[50] = {
    id: 50, name: 'Transmission Media', icon: '📶',
    color: '#f59e0b',
    desc: 'Guided and unguided media used to carry signals between network devices.',
    tags: ['Media', 'Fiber', 'Wireless'],
    notes: `Transmission Media: Guided media include twisted pair cable, coaxial cable, and optical fiber.
Unguided media include radio waves, microwaves, infrared, and satellite links.
Each medium has different bandwidth, attenuation, and noise characteristics.
Optical fiber is high speed and low loss, while wireless media are flexible but prone to interference.
Media selection depends on distance, cost, and network performance requirements.`
  };
SUBJECTS[51] = {
    id: 51, name: 'Signals and Encoding', icon: '🔣',
    color: '#a855f7',
    desc: 'How data is represented as electrical or optical signals for transmission.',
    tags: ['Encoding', 'Modulation', 'Signals'],
    notes: `Signals and Encoding: Analog signals vary continuously while digital signals use discrete levels.
Line coding takes digital data and converts it to signal waveforms.
Modulation moves signals to a carrier frequency for transmission.
Common schemes include ASK, FSK, PSK, PCM, and Manchester encoding.
Proper encoding increases noise immunity and makes synchronization easier.`
  };
SUBJECTS[52] = {
    id: 52, name: 'OSI Reference Model', icon: '🧱',
    color: '#14b8a6',
    desc: 'Standard seven-layer model describing network protocol architecture.',
    tags: ['OSI', 'Layers', 'Protocols'],
    notes: `OSI Reference Model: The OSI model has seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.
Each layer performs a specific set of communication functions.
Encapsulation wraps higher-layer data in lower-layer headers for transmission.
OSI helps standardize network services and interoperability across vendors.`
  };
SUBJECTS[53] = {
    id: 53, name: 'TCP/IP Model', icon: '🌍',
    color: '#22d3a0',
    desc: 'Core Internet protocol suite model with layered network functions.',
    tags: ['TCP/IP', 'Internet', 'Protocols'],
    notes: `TCP/IP Model: The TCP/IP model typically has four layers: Application, Transport, Internet, and Network Interface.
The model supports protocols such as HTTP, TCP, IP, UDP, ARP, and ICMP.
It is the foundation of modern internet communication and packet switching.
TCP/IP emphasizes practical protocol design and interoperability over theoretical layering.`
  };
SUBJECTS[54] = {
    id: 54, name: 'Switching Techniques', icon: '🔀',
    color: '#8b5cf6',
    desc: 'Methods for moving data between network nodes across a communication system.',
    tags: ['Switching', 'Packet', 'Circuit'],
    notes: `Switching Techniques: Circuit switching establishes a dedicated path between sender and receiver.
Packet switching breaks data into packets and forwards them independently.
Message switching stores and forwards complete messages from node to node.
Virtual circuits and datagrams are two packet-switching approaches.
Selection depends on network requirements for latency, efficiency, and reliability.`
  };
SUBJECTS[55] = {
    id: 55, name: 'Error Detection and Control', icon: '🛠️',
    color: '#f97316',
    desc: 'Techniques to detect and correct transmission errors in network communication.',
    tags: ['CRC', 'ARQ', 'Parity'],
    notes: `Error Detection and Control: Parity checks, checksums, and CRCs detect errors in transmitted data.
Automatic Repeat Request (ARQ) schemes request retransmission of damaged frames.
Forward Error Correction adds redundancy so the receiver can correct some errors without retransmission.
Choosing the right method balances reliability and overhead.`
  };
SUBJECTS[56] = {
    id: 56, name: 'Network Devices', icon: '🎛️',
    color: '#0ea5e9',
    desc: 'Hardware components that connect, manage, and direct network traffic.',
    tags: ['Router', 'Switch', 'Hub'],
    notes: `Network Devices: Routers forward packets between different networks using IP addresses.
Switches forward frames within a network using MAC addresses.
Hubs broadcast incoming signals to all connected devices.
Repeaters regenerate signals to extend transmission distance.
Firewalls, access points, and gateways each support specific network functions.`
  };
SUBJECTS[57] = {
    id: 57, name: 'Network Security', icon: '🔒',
    color: '#ef4444',
    desc: 'Protecting network resources from unauthorized access and attacks.',
    tags: ['Security', 'Encryption', 'Firewall'],
    notes: `Network Security: Security covers confidentiality, integrity, and availability of data.
Firewalls filter traffic to prevent unauthorized access.
Encryption protects data in transit from eavesdropping.
Authentication verifies user or device identity.
Security policies and tools reduce risk from malware, phishing, and attacks.`
  };
SUBJECTS[58] = {
    id: 58, name: 'Wireless and Mobile Communication', icon: '📱',
    color: '#f97316',
    desc: 'Wireless network standards and mobile communication principles.',
    tags: ['Wireless', 'Mobile', 'Wi-Fi'],
    notes: `Wireless and Mobile Communication: Wireless systems use radio, microwave, or infrared signals.
Mobile communication supports handoff, roaming, and cellular architectures.
Wi-Fi, Bluetooth, NFC, and LTE are common wireless technologies.
Wireless channels face interference, fading, and mobility challenges.
Security and spectrum management are critical in wireless networking.`
  };
SUBJECTS[59] = {
    id: 59, name: 'Modern Communication Technologies', icon: '🚀',
    color: '#22c55e',
    desc: 'Emerging networking technologies shaping the future of communication.',
    tags: ['5G', 'IoT', 'SDN'],
    notes: `Modern Communication Technologies: Modern trends include 5G, IoT, SDN, NFV, and cloud networking.
IoT connects sensors and devices to exchange data at scale.
Software defined networking separates control logic from forwarding hardware.
Edge computing and virtualization improve performance for new applications.
Emerging technologies support higher speed, lower latency, and smarter networks.`
  };

const LEVEL_CONFIG = {
  basic:   { count: 30, points: 1, label: 'Basic',   color: '#22d3a0' },
  medium:  { count: 30, points: 2, label: 'Medium',  color: '#f5c842' },
  advance: { count: 30, points: 3, label: 'Advance', color: '#f87171' }
};

// ─── STATE ────────────────────────────────────────────────────────────────────
let state = {
  currentUser: null,
  users: JSON.parse(localStorage.getItem('mm_users') || '{}'),
  currentPage: 'home',
  currentSubject: null,
  currentLevel: 'basic',
  questions: [],
  currentQ: 0,
  score: 0,
  correct: 0,
  wrong: 0,
  answered: false,
  quizHistory: []
};

function saveUsers() { localStorage.setItem('mm_users', JSON.stringify(state.users)); }
function saveHistory() {
  if (!state.currentUser) return;
  state.users[state.currentUser].history = state.quizHistory;
  state.users[state.currentUser].totalScore = getTotalScore();
  saveUsers();
}
function getTotalScore() {
  return state.quizHistory.reduce((a, h) => a + h.score, 0);
}

// ─── AUTH ─────────────────────────────────────────────────────────────────────
function switchTab(t) {
  document.querySelectorAll('.auth-tab').forEach((el,i) => el.classList.toggle('active', (i===0&&t==='login')||(i===1&&t==='register')));
  document.getElementById('login-form').style.display = t==='login' ? 'flex' : 'none';
  document.getElementById('register-form').style.display = t==='register' ? 'flex' : 'none';
}

function doLogin() {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value;
  if (!state.users[u] || state.users[u].password !== p) {
    document.getElementById('login-err').style.display = 'block'; return;
  }
  document.getElementById('login-err').style.display = 'none';
  loginSuccess(u);
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const u = document.getElementById('reg-user').value.trim();
  const p = document.getElementById('reg-pass').value;
  const errEl = document.getElementById('reg-err');
  if (!name || !u || !p) { errEl.textContent='All fields required'; errEl.style.display='block'; return; }
  if (state.users[u]) { errEl.textContent='Username already taken'; errEl.style.display='block'; return; }
  errEl.style.display = 'none';
  state.users[u] = { name, password: p, history: [], totalScore: 0 };
  saveUsers();
  loginSuccess(u);
}

function loginSuccess(u) {
  state.currentUser = u;
  state.quizHistory = state.users[u].history || [];
  document.getElementById('auth-overlay').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  const userData = state.users[u];
  document.getElementById('user-display').textContent = userData.name;
  document.getElementById('user-avatar').textContent = userData.name[0].toUpperCase();
  updateScoreDisplay();
  renderSubjects();
  updateSidebarStats();
  updateAchievementUI();
  showPage('home');
}

function doLogout() {
  state.currentUser = null;
  document.getElementById('auth-overlay').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
  showPage('home');
}

// ─── PAGES ────────────────────────────────────────────────────────────────────
function showPage(pg) {
  ['home','quiz','results','history','achievements'].forEach(p => {
    document.getElementById('page-'+p).style.display = 'none';
  });
  document.getElementById('page-'+pg).style.display = 'block';
  state.currentPage = pg;

  // update nav active
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  if (pg==='home') document.getElementById('nav-home')?.classList.add('active');
  if (pg==='history') document.getElementById('nav-history')?.classList.add('active');
  if (pg==='achievements') { document.getElementById('nav-achievements')?.classList.add('active'); renderAchievements(); }

  // topbar
  const titles = { home:'Dashboard', quiz:'Quiz', results:'Results', history:'History', achievements:'Achievements' };
  document.getElementById('topbar-title').textContent = titles[pg] || '';


  if (pg==='history') renderHistory();
  if (pg==='achievements') renderAchievements();
  closeSidebar();
}


// ─── PROGRAMMING SUBJECTS ───────────────────────────────────────────────────
SUBJECTS[60] = {
  id: 60, name: 'Python Basics', icon: '🐍', color: '#4f8ef7',
  desc: 'Variables, data types, print, input, comments, type conversion.',
  tags: ['Variables', 'Types', 'Print'], notes: ''
};
SUBJECTS[61] = {
  id: 61, name: 'Control Flow', icon: '🔀', color: '#a78bfa',
  desc: 'if/elif/else, for loops, while loops, break, continue, range.',
  tags: ['if/else', 'Loops', 'Break'], notes: ''
};
SUBJECTS[62] = {
  id: 62, name: 'Functions', icon: '⚙️', color: '#f5c842',
  desc: 'def, return, parameters, default args, *args, **kwargs, lambda.',
  tags: ['def', 'Return', 'Lambda'], notes: ''
};
SUBJECTS[63] = {
  id: 63, name: 'Lists & Tuples', icon: '📋', color: '#22d3a0',
  desc: 'List methods, indexing, slicing, tuples, list comprehensions.',
  tags: ['Lists', 'Tuples', 'Slicing'], notes: ''
};
SUBJECTS[64] = {
  id: 64, name: 'Dictionaries & Sets', icon: '📚', color: '#f87171',
  desc: 'Dict creation, keys/values, set operations, membership testing.',
  tags: ['Dict', 'Sets', 'Keys'], notes: ''
};
SUBJECTS[65] = {
  id: 65, name: 'OOP', icon: '🏗️', color: '#fb923c',
  desc: 'Classes, __init__, self, inheritance, encapsulation, polymorphism.',
  tags: ['Classes', 'Inheritance', 'self'], notes: ''
};
SUBJECTS[66] = {
  id: 66, name: 'File Handling & Exceptions', icon: '📁', color: '#34d399',
  desc: 'open(), read/write, with statement, try/except, raise, finally.',
  tags: ['Files', 'Exceptions', 'try/except'], notes: ''
};
SUBJECTS[67] = {
  id: 67, name: 'Mixed Python', icon: '🐍', color: '#60a5fa',
  desc: 'Mixed Python practice questions from all topics.',
  tags: ['Mixed', 'Exam', 'All Topics'], notes: ''
};

// ─── MODULES ─────────────────────────────────────────────────────────────────
const MODULES = [
  {
    id: 'dm', name: 'Discrete Mathematics', icon: '🧠',
    color: '#4f8ef7',
    desc: 'Logic, Number Theory, Probability, Sets, Graph Theory & more.',
    active: true,
    subjects: [0,1,2,3,4,5,6,7]
  },
  {
    id: 'ics', name: 'Introduction to Computer Systems', icon: '💻',
    color: '#a78bfa',
    desc: 'Computer basics, hardware, memory, software, OS, programming, data, networks & security.',
    active: true,
    subjects: [38,39,40,41,42,43,44,45,46,47]
  },
  {
    id: 'ca', name: 'Computer Architecture', icon: '🖥️',
    color: '#f5c842',
    desc: 'CPU design, memory hierarchy, instruction sets & pipelines.',
    active: true,
    subjects: [21,22,23,24,25,26,27,28,29,30,31]
  },
  {
    id: 'fp', name: 'Fundamentals of Programming', icon: '⌨️',
    color: '#22d3a0',
    desc: 'Python basics, control flow, functions, lists, dictionaries, OOP and file handling.',
    active: true,
    subjects: [60,61,62,63,64,65,66,67]
  },
  {
    id: 'dsa', name: 'Data Structures & Algorithms', icon: '🧩',
    color: '#38bdf8',
    desc: 'Algorithms, analysis, sorting, searching, linked lists and trees.',
    active: true,
    subjects: [15,16,17,18,19,20]
  },
  {
    id: 'dbs', name: 'Database Systems', icon: '🗄️',
    color: '#ef4444',
    desc: 'DBMS fundamentals, ER models, relational model, normalization & transactions.',
    active: true,
    subjects: [32,33,34,35,36]
  },
  {
    id: 'dc', name: 'Data Communication', icon: '📡',
    color: '#0ea5e9',
    desc: 'Signals, media, OSI, TCP/IP, switching, security and wireless communication.',
    active: true,
    subjects: [48,49,50,51,52,53,54,55,56,57,58,59]
  },
  {
    id: 'ag', name: 'Academic & Groomings', icon: '🎓',
    color: '#fb923c',
    desc: 'Study skills, academic writing & professional development.',
    active: true,
    subjects: [8,9,10,11,12,13,14]
  }
];

function updateHomeStatsCards() {
  const moduleCountEl = document.getElementById('stat-module-count');
  const questionCountEl = document.getElementById('stat-question-count');
  if (!moduleCountEl || !questionCountEl) return;

  const moduleCount = MODULES.length;
  const totalTopics = MODULES
    .filter(m => m.active && Array.isArray(m.subjects))
    .reduce((sum, m) => sum + m.subjects.length, 0);
  const questionsPerTopic = LEVEL_CONFIG?.basic?.count || 30;

  moduleCountEl.textContent = moduleCount;
  questionCountEl.textContent = totalTopics * questionsPerTopic;
}

function renderModules() {
  updateHomeStatsCards();
  const grid = document.getElementById('modules-grid');
  grid.innerHTML = `<div class="modules-section-label">All Modules</div>` +
    MODULES.map(m => {
      if (m.active) {
        const topicCards = m.subjects.map(sid => {
          const s = SUBJECTS[sid];
          return `<div class="topic-chip" onclick="startQuiz(${s.id})" style="--card-color:${m.color}">
            <div class="topic-chip-icon">${s.icon}</div>
            <div class="topic-chip-info">
              <div class="topic-chip-name">${s.name}</div>
              <div class="topic-chip-q">30 Questions</div>
            </div>
          </div>`;
        }).join('');
        return `
          <div class="module-card" style="--card-color:${m.color}">
            <div class="module-card-header">
              <div class="module-card-icon-big">${m.icon}</div>
              <div class="module-card-info">
                <div class="module-card-name">${m.name}</div>
                <div class="module-card-desc">${m.desc}</div>
              </div>
              <div class="module-card-badge active-badge" style="border-color:${m.color};color:${m.color};background:${m.color}18">${m.subjects.length} Topics</div>
            </div>
            <div class="module-topics-grid">${topicCards}</div>
          </div>`;
      } else {
        return `
          <div class="module-card" style="--card-color:${m.color};opacity:.75">
            <div class="module-card-header" style="cursor:default">
              <div class="module-card-icon-big">${m.icon}</div>
              <div class="module-card-info">
                <div class="module-card-name">${m.name}</div>
                <div class="module-card-desc">${m.desc}</div>
              </div>
              <div class="module-card-badge soon-badge">Coming Soon</div>
            </div>
            <div class="module-coming-soon-body">
              📂 No topics added yet. Upload your notes to get started.
            </div>
          </div>`;
      }
    }).join('');
}

// ─── SUBJECTS (kept for quiz logic) ─────────────────────────────────────────
function renderSubjects() { renderModules(); }

// ─── QUIZ FLOW ────────────────────────────────────────────────────────────────
let lastSubjectId = null;
let lastLevel = null;

function startQuizFromNav(id) {
  startQuiz(id);
}

function startQuiz(subjectId, level) {
  const lv = level || state.currentLevel || 'basic';
  lastSubjectId = subjectId;
  lastLevel = lv;
  state.currentSubject = SUBJECTS[subjectId];
  state.currentLevel = lv;
  state.questions = [];
  state.currentQ = 0;
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  state.answered = false;

  document.getElementById('quiz-subject-title').textContent = state.currentSubject.name;
  const cfg = LEVEL_CONFIG[lv];
  document.getElementById('quiz-level-meta').textContent = ''; // removed difficulty text from quiz header
  document.getElementById('q-counter').textContent = `0/${cfg.count}`;
  document.getElementById('progress-fill').style.width = '0%';

  showPage('quiz');
  document.getElementById('loading-state').style.display = 'block';
  document.getElementById('question-area').style.display = 'none';

  generateQuestions(state.currentSubject, lv);
}

function setLevel(lv) {
  state.currentLevel = lv;
}

function setTheme(mode) {
  const body = document.body;
  const darkBtn = document.getElementById('dark-btn');
  const lightBtn = document.getElementById('light-btn');

  // Instant class prevents the whole page from switching in small delayed chunks.
  body.classList.add('theme-instant');

  if (mode === 'light') {
    body.classList.add('light-mode');
    darkBtn.classList.remove('active');
    lightBtn.classList.add('active');
  } else {
    body.classList.remove('light-mode');
    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
  }

  // Force one paint, then restore normal hover/animation transitions.
  body.offsetHeight;
  requestAnimationFrame(() => {
    setTimeout(() => body.classList.remove('theme-instant'), 40);
  });
}

function retryQuiz() {
  if (lastSubjectId !== null) startQuiz(lastSubjectId, lastLevel);
}


// ===== STRONG ANSWER SHUFFLE SYSTEM =====
// Fisher-Yates shuffle + prevents the correct answer from staying in the same position
// on back-to-back questions whenever possible.
function shuffleArrayStrong(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomizeQuestionOptions(q, avoidAnswerIndex = null, answerPositionCounts = [0, 0, 0, 0]) {
  if (!q || !Array.isArray(q.options) || q.options.length < 2) return q;

  const originalAnswerIndex = Number(q.answer);
  const optionsWithCorrectFlag = q.options.map((optionText, index) => ({
    text: optionText,
    isCorrect: index === originalAnswerIndex
  }));

  // Generate many shuffled versions, then pick the best one.
  // Priority 1: correct answer should NOT be in same position as previous question.
  // Priority 2: keep answer positions balanced across A/B/C/D.
  const candidates = [];
  for (let attempt = 0; attempt < 80; attempt++) {
    const shuffled = shuffleArrayStrong(optionsWithCorrectFlag);
    const newAnswerIndex = shuffled.findIndex(item => item.isCorrect);
    candidates.push({ shuffled, newAnswerIndex });
  }

  let valid = candidates.filter(c => c.newAnswerIndex !== avoidAnswerIndex);
  if (valid.length === 0) valid = candidates;

  const minCount = Math.min(...valid.map(c => answerPositionCounts[c.newAnswerIndex] || 0));
  const balanced = valid.filter(c => (answerPositionCounts[c.newAnswerIndex] || 0) === minCount);
  const chosen = balanced[Math.floor(Math.random() * balanced.length)] || valid[0];

  return {
    ...q,
    options: chosen.shuffled.map(item => item.text),
    answer: chosen.newAnswerIndex >= 0 ? chosen.newAnswerIndex : originalAnswerIndex
  };
}

function balanceRandomizeQuestionSet(questionList) {
  let previousAnswerIndex = null;
  const answerPositionCounts = [0, 0, 0, 0];

  return questionList.map((q) => {
    const randomized = randomizeQuestionOptions(q, previousAnswerIndex, answerPositionCounts);
    previousAnswerIndex = randomized.answer;
    if (answerPositionCounts[randomized.answer] !== undefined) {
      answerPositionCounts[randomized.answer]++;
    }
    return randomized;
  });
}

// ─── AI QUESTION GENERATION ───────────────────────────────────────────────────

// ─── PROPOSITIONAL LOGIC QUESTION BANK (id=0) ───────────────────────────────
const PL_QUESTIONS = [
  {
    "q": "What is a proposition?",
    "options": [
      "A question",
      "A command",
      "A declarative sentence with truth value",
      "A variable"
    ],
    "answer": 2,
    "explanation": "A proposition is a statement that can be clearly TRUE or FALSE.\nExamples:\n\n“5 > 3” → TRUE\n“2 + 2 = 5” → FALSE\nQuestions and commands don’t have truth values."
  },
  {
    "q": "Which is NOT a proposition?",
    "options": [
      "2 + 2 = 4",
      "What time is it?",
      "Earth is round",
      "5 > 3"
    ],
    "answer": 1,
    "explanation": "A proposition must have a truth value.\n\nQuestions like “What time is it?” → no truth value ❌\nSo it is not a proposition."
  },
  {
    "q": "What are truth values?",
    "options": [
      "Numbers",
      "T or F",
      "Variables",
      "Sets"
    ],
    "answer": 1,
    "explanation": "Every proposition can only be:\n\nTRUE (T)\nFALSE (F)\nNo other values are allowed."
  },
  {
    "q": "What is the negation of p?",
    "options": [
      "p ∧ q",
      "¬p",
      "p ∨ q",
      "p → q"
    ],
    "answer": 1,
    "explanation": "Negation means “NOT p”.\nIf p is TRUE → ¬p is FALSE\nIf p is FALSE → ¬p is TRUE"
  },
  {
    "q": "If p is TRUE, what is ¬p?",
    "options": [
      "TRUE",
      "FALSE",
      "BOTH",
      "NONE"
    ],
    "answer": 1,
    "explanation": "Negation flips truth value:\nTRUE → FALSE"
  },
  {
    "q": "When is p ∧ q TRUE?",
    "options": [
      "One is true",
      "Both are true",
      "Both false",
      "One false"
    ],
    "answer": 1,
    "explanation": "AND (∧) is TRUE only when both p and q are TRUE.\nEven one FALSE → result becomes FALSE."
  },
  {
    "q": "When is p ∨ q FALSE?",
    "options": [
      "Both true",
      "One true",
      "Both false",
      "One false"
    ],
    "answer": 2,
    "explanation": "OR (∨) is FALSE only when both are FALSE.\nOtherwise it is TRUE."
  },
  {
    "q": "XOR is TRUE when:",
    "options": [
      "Both true",
      "Both false",
      "Exactly one true",
      "Always true"
    ],
    "answer": 2,
    "explanation": "Exclusive OR means:\n👉 Only one must be TRUE\nIf both are same → FALSE"
  },
  {
    "q": "When is p → q FALSE?",
    "options": [
      "p true, q false",
      "p false, q true",
      "both true",
      "both false"
    ],
    "answer": 0,
    "explanation": "Implication rule:\n👉 Only FALSE when p = TRUE and q = FALSE\nAll other cases → TRUE"
  },
  {
    "q": "If p is FALSE, p → q is:",
    "options": [
      "FALSE",
      "TRUE",
      "Undefined",
      "Depends"
    ],
    "answer": 1,
    "explanation": "If p is FALSE, implication is always TRUE.\nThis is a key logical rule."
  },
  {
    "q": "“p only if q” means:",
    "options": [
      "p ∧ q",
      "p → q",
      "q → p",
      "p ∨ q"
    ],
    "answer": 1,
    "explanation": "“Only if” means condition:\n👉 p happens only if q is true → p → q"
  },
  {
    "q": "Converse of p → q is:",
    "options": [
      "¬p → ¬q",
      "q → p",
      "p ∧ q",
      "p ∨ q"
    ],
    "answer": 1,
    "explanation": "Converse swaps the order:\np → q becomes q → p"
  },
  {
    "q": "Contrapositive of p → q is:",
    "options": [
      "q → p",
      "¬p → ¬q",
      "¬q → ¬p",
      "p ∧ q"
    ],
    "answer": 2,
    "explanation": "Steps:\n\nNegate both\nReverse order\n\n👉 Result: ¬q → ¬p\nThis is logically equivalent to original."
  },
  {
    "q": "Inverse of p → q is:",
    "options": [
      "¬p → ¬q",
      "q → p",
      "¬q → ¬p",
      "p ∨ q"
    ],
    "answer": 0,
    "explanation": "Inverse only negates both parts:\np → q → ¬p → ¬q"
  },
  {
    "q": "Equivalent of p → q is:",
    "options": [
      "¬p ∨ q",
      "p ∧ q",
      "p ∨ q",
      "¬q"
    ],
    "answer": 0,
    "explanation": "Important identity:\n👉 p → q ≡ ¬p ∨ q\nUsed in simplification."
  },
  {
    "q": "Tautology means:",
    "options": [
      "Always false",
      "Always true",
      "Sometimes true",
      "Random"
    ],
    "answer": 1,
    "explanation": "A tautology is TRUE in all possible cases.\nExample: p ∨ ¬p"
  },
  {
    "q": "Contradiction means:",
    "options": [
      "Always true",
      "Always false",
      "Sometimes true",
      "Equal"
    ],
    "answer": 1,
    "explanation": "A contradiction is FALSE in all cases.\nExample: p ∧ ¬p"
  },
  {
    "q": "p ∨ ¬p is:",
    "options": [
      "Contradiction",
      "Tautology",
      "Contingency",
      "False"
    ],
    "answer": 1,
    "explanation": "Either p is true OR not p is true → always TRUE."
  },
  {
    "q": "p ∧ ¬p is:",
    "options": [
      "Tautology",
      "Contradiction",
      "True",
      "Equal"
    ],
    "answer": 1,
    "explanation": "p and NOT p cannot both be true → always FALSE."
  },
  {
    "q": "Logical equivalence means:",
    "options": [
      "Same symbols",
      "Same truth values",
      "Same variables",
      "Same size"
    ],
    "answer": 1,
    "explanation": "Two statements are equivalent if their truth tables are identical."
  },
  {
    "q": "De Morgan’s Law is:",
    "options": [
      "¬(p ∧ q) = ¬p ∨ ¬q",
      "p ∧ q = p ∨ q",
      "p = q",
      "None"
    ],
    "answer": 0,
    "explanation": "Negation of AND becomes OR of negations.\nThis is a key transformation rule."
  },
  {
    "q": "Boolean AND means:",
    "options": [
      "Either term",
      "Both terms",
      "Exclude",
      "None"
    ],
    "answer": 1,
    "explanation": "AND requires both conditions to be satisfied."
  },
  {
    "q": "Boolean OR means:",
    "options": [
      "Both only",
      "One or both",
      "None",
      "Exclude"
    ],
    "answer": 1,
    "explanation": "OR allows either one or both conditions."
  },
  {
    "q": "Boolean NOT means:",
    "options": [
      "Include",
      "Exclude",
      "Add",
      "Multiply"
    ],
    "answer": 1,
    "explanation": "NOT removes unwanted results."
  },
  {
    "q": "Predicate is:",
    "options": [
      "Complete statement",
      "Statement with variable",
      "Only number",
      "Only set"
    ],
    "answer": 1,
    "explanation": "Predicate contains a variable, so it is not complete until a value is assigned."
  },
  {
    "q": "Predicate becomes proposition when:",
    "options": [
      "Symbol changes",
      "Value assigned",
      "Always",
      "None"
    ],
    "answer": 1,
    "explanation": "Example:\nP(x): x > 3\nP(5): TRUE → now it is a proposition."
  },
  {
    "q": "P(4): x > 3 is:",
    "options": [
      "FALSE",
      "TRUE",
      "Undefined",
      "None"
    ],
    "answer": 1,
    "explanation": "4 > 3 → TRUE"
  },
  {
    "q": "Q(1,2): x = y + 3 is:",
    "options": [
      "TRUE",
      "FALSE",
      "BOTH",
      "NONE"
    ],
    "answer": 1,
    "explanation": "Check:\n1 = 2 + 3 → 1 = 5 ❌\nSo FALSE."
  },
  {
    "q": "Duality means:",
    "options": [
      "Swap variables",
      "Swap ∧ and ∨",
      "Swap truth only",
      "None"
    ],
    "answer": 1,
    "explanation": "Duality replaces:\n\nAND ↔ OR\nTRUE ↔ FALSE"
  },
  {
    "q": "Logic circuits use:",
    "options": [
      "Numbers",
      "Logical operators",
      "Graphs",
      "Sets"
    ],
    "answer": 1,
    "explanation": "Logic circuits are built using:\n\nAND gates\nOR gates\nNOT gates"
  }
];

// ─── NUMBER THEORY QUESTION BANK (id=1) ──────────────────────────────────────
const NT_QUESTIONS = [
  { q:"Which statement defines divisibility correctly?", options:["a divides b if b/a is always an integer","a divides b if b = ac for some integer c","a divides b if a > b","a divides b if b is prime"], answer:1, explanation:"a divides b means b can be written as a × c, where c is an integer. Example: 3 divides 12 because 12 = 3 × 4." },
  { q:"Which number is NOT divisible by 4?", options:["16","20","18","24"], answer:2, explanation:"A number is divisible by 4 if the answer is an integer. 18 ÷ 4 = 4.5, which is not an integer. So 18 is not divisible by 4." },
  { q:"How many positive integers not exceeding 20 are divisible by 3?", options:["5","6","7","8"], answer:1, explanation:"Use the formula: ⌊n/d⌋ = ⌊20/3⌋ = 6. Numbers are: 3, 6, 9, 12, 15, 18. So there are 6 numbers." },
  { q:"Find the quotient when 45 is divided by 6.", options:["6","7","8","9"], answer:1, explanation:"Using division algorithm: 45 = 6 × 7 + 3. Here, quotient = 7 and remainder = 3." },
  { q:"What is 38 mod 7?", options:["2","3","4","5"], answer:1, explanation:"38 ÷ 7 = 5 remainder 3. So 38 mod 7 = 3." },
  { q:"What is −11 mod 3?", options:["−2","2","1","0"], answer:2, explanation:"The remainder must satisfy 0 ≤ r < 3. −11 = 3(−4) + 1. So −11 mod 3 = 1." },
  { q:"What does a mod m represent?", options:["Quotient","Remainder","Difference","Product"], answer:1, explanation:"a mod m means the remainder when a is divided by m. Example: 14 mod 5 = 4." },
  { q:"Which is TRUE?", options:["17 ≡ 5 (mod 6)","17 ≡ 4 (mod 6)","17 ≡ 3 (mod 6)","17 ≡ 2 (mod 6)"], answer:0, explanation:"17 ≡ 5 (mod 6) means 17 − 5 must be divisible by 6. 17 − 5 = 12, and 12 is divisible by 6. So 17 ≡ 5 (mod 6)." },
  { q:"Which pair is congruent modulo 5?", options:["12 and 3","14 and 4","9 and 1","7 and 3"], answer:1, explanation:"Two numbers are congruent mod 5 if their difference is divisible by 5. 14 − 4 = 10, which is divisible by 5. So 14 ≡ 4 (mod 5)." },
  { q:"What time is 50 hours after 2:00 on a 12-hour clock?", options:["2:00","4:00","6:00","8:00"], answer:1, explanation:"Use modulo 12: 2 + 50 = 52. 52 mod 12 = 4. So the time is 4:00." },
  { q:"What time is 40 hours before 10:00 on a 12-hour clock?", options:["6:00","8:00","10:00","2:00"], answer:0, explanation:"10 − 40 = −30. Now find −30 mod 12. −30 = 12(−3) + 6. So the time is 6:00." },
  { q:"Find (17 + 23) mod 10.", options:["0","2","4","6"], answer:0, explanation:"17 + 23 = 40. 40 mod 10 = 0. So the answer is 0." },
  { q:"Find (7 × 11) mod 6.", options:["1","3","5","6"], answer:2, explanation:"7 × 11 = 77. 77 ÷ 6 = 12 remainder 5. So 77 mod 6 = 5." },
  { q:"Which number is NOT prime?", options:["13","17","21","19"], answer:2, explanation:"A prime number has only two factors: 1 and itself. 21 has factors 1, 3, 7, 21. So 21 is not prime." },
  { q:"Why is 101 prime?", options:["It is an even number","It is divisible by 3","It has no prime divisor ≤ √101","It ends with 1"], answer:2, explanation:"To test 101, check primes ≤ √101 ≈ 10. Check 2, 3, 5, 7. 101 is not divisible by any of them. So 101 is prime." },
  { q:"Prime factorization of 100 is:", options:["2² × 5²","2 × 50","4 × 25","10 × 10"], answer:0, explanation:"100 = 10 × 10 = (2 × 5) × (2 × 5) = 2² × 5²." },
  { q:"Find gcd(24, 36).", options:["6","8","12","18"], answer:2, explanation:"Common divisors of 24 and 36 are: 1, 2, 3, 4, 6, 12. The greatest one is 12. So gcd(24, 36) = 12." },
  { q:"Which pair is relatively prime?", options:["12 and 18","15 and 25","17 and 22","10 and 20"], answer:2, explanation:"Relatively prime means gcd = 1. 17 and 22 have no common divisor except 1. So they are relatively prime." },
  { q:"Find LCM of 4 and 6.", options:["12","24","6","18"], answer:0, explanation:"Multiples of 4: 4, 8, 12, 16. Multiples of 6: 6, 12, 18. Smallest common multiple is 12. So LCM = 12." },
  { q:"If gcd(a,b) = 2 and lcm(a,b) = 24, find ab.", options:["12","24","48","96"], answer:2, explanation:"Formula: a × b = gcd(a,b) × lcm(a,b). So ab = 2 × 24 = 48." },
  { q:"What is the first step of finding gcd(91,287) using Euclidean algorithm?", options:["287 = 91 × 3 + 14","91 = 287 × 3","287 = 91 × 2","91 = 14 × 6"], answer:0, explanation:"Divide the larger number by the smaller: 287 ÷ 91 = 3 remainder 14. So 287 = 91 × 3 + 14." },
  { q:"Find gcd(91,287).", options:["1","7","14","21"], answer:1, explanation:"Using Euclidean algorithm: 287 = 91×3 + 14, then 91 = 14×6 + 7, then 14 = 7×2 + 0. The last non-zero remainder is 7. So gcd(91,287) = 7." },
  { q:"What does a ≡ b (mod m) mean?", options:["a = b","a − b is divisible by m","a + b is divisible by m","a × b is divisible by m"], answer:1, explanation:"a ≡ b (mod m) means a and b have the same remainder when divided by m. It also means m divides a − b." },
  { q:"If a ≡ b (mod m), which statement is true?", options:["a + c ≡ b + c (mod m)","a − c is never congruent to b − c","a cannot equal b","a must be smaller than b"], answer:0, explanation:"Adding the same number to both sides keeps congruence true. Example: if 8 ≡ 3 (mod 5), then 8+2 ≡ 3+2 (mod 5). Both 10 and 5 leave remainder 0." },
  { q:"Find 123 mod 10.", options:["1","2","3","4"], answer:2, explanation:"123 ÷ 10 = 12 remainder 3. So 123 mod 10 = 3." },
  { q:"Find 1000 mod 9.", options:["0","1","2","3"], answer:1, explanation:"999 is divisible by 9. 1000 = 999 + 1. So 1000 mod 9 = 1." },
  { q:"Which type of number always has remainder 0 when divided by 2?", options:["Odd numbers","Even numbers","Prime numbers","Negative numbers"], answer:1, explanation:"Even numbers are divisible by 2. So their remainder is always 0 when divided by 2." },
  { q:"If a divides b and b divides c, then what can we say?", options:["a divides c","c divides a","a divides b² only","none"], answer:0, explanation:"If a|b then b=ak. If b|c then c=bt. Substituting: c=akt. So c is a multiple of a. Therefore a divides c." },
  { q:"Which expression is always divisible by 3?", options:["2n","3n","n + 1","n − 1"], answer:1, explanation:"3n means 3 × n. So it is always a multiple of 3 for any integer n." },
  { q:"Which statement is TRUE?", options:["gcd is always bigger than both numbers","lcm is always smaller than both numbers","gcd(a,b) × lcm(a,b) = a × b","prime numbers have many factors"], answer:2, explanation:"For two positive integers a and b: gcd(a,b) × lcm(a,b) = a × b. Example: gcd(4,6)=2, lcm(4,6)=12, 2×12=24=4×6." }
];

// ─── GRAPH THEORY QUESTION BANK (id=4) ───────────────────────────────────────
const GT_QUESTIONS = [
  { q:"A graph is:", options:["Only vertices","Only edges","Vertices and edges","Numbers"], answer:2, explanation:"A graph G=(V,E) is a collection of vertices V and edges E connecting them." },
  { q:"A vertex is:", options:["Connection","Node","Edge","Path"], answer:1, explanation:"A vertex (plural: vertices) is a node or point in a graph." },
  { q:"An edge is:", options:["A node","A connection between vertices","A loop","A number"], answer:1, explanation:"An edge connects two vertices in a graph." },
  { q:"Undirected graph means:", options:["No vertices","No edges","Edges have no direction","Only loops"], answer:2, explanation:"In an undirected graph, edges have no direction — the connection is bidirectional." },
  { q:"Directed graph means:", options:["No edges","Edges have direction","Only vertices","Only paths"], answer:1, explanation:"In a directed graph (digraph), each edge has a specific direction indicated by an arrow." },
  { q:"A simple graph:", options:["Allows loops","Allows multiple edges","Has no loops or multiple edges","Only loops"], answer:2, explanation:"A simple graph has no self-loops and no multiple edges between the same pair of vertices." },
  { q:"Degree of a vertex is:", options:["Number of vertices","Number of edges incident to it","Number of graphs","Path length"], answer:1, explanation:"The degree of a vertex is the count of edges that are incident (attached) to it." },
  { q:"A loop contributes how much to vertex degree?", options:["1","2","0","3"], answer:1, explanation:"A loop (an edge from a vertex to itself) is counted twice in the degree of that vertex." },
  { q:"The sum of all vertex degrees equals:", options:["Number of edges","Number of vertices","2 × number of edges","Number of edges squared"], answer:2, explanation:"By the handshaking lemma, the sum of all degrees = 2|E|, since each edge contributes 2 to the total degree sum." },
  { q:"In-degree of a vertex in a digraph is:", options:["Outgoing edges","Incoming edges","Total edges","Loops only"], answer:1, explanation:"In-degree counts the number of directed edges entering (pointing into) a vertex." },
  { q:"Out-degree of a vertex in a digraph is:", options:["Incoming edges","Outgoing edges","Total vertices","Paths"], answer:1, explanation:"Out-degree counts the number of directed edges leaving (pointing out of) a vertex." },
  { q:"A path in a graph is:", options:["A vertex set","A sequence of edges connecting vertices","A cycle only","A loop"], answer:1, explanation:"A path is a sequence of vertices connected by edges, traversing from one vertex to another." },
  { q:"The length of a path is:", options:["Number of vertices in it","Number of edges in it","Number of loops","Degree sum"], answer:1, explanation:"The length of a path is measured by the number of edges it contains." },
  { q:"A simple path:", options:["Repeats vertices","Has no repeated vertices","Only uses edges","Is infinite"], answer:1, explanation:"A simple path visits each vertex at most once — no vertex is repeated." },
  { q:"A cycle is:", options:["An open path","A closed path starting and ending at the same vertex","A directed path only","A loop only"], answer:1, explanation:"A cycle is a path that starts and ends at the same vertex, forming a closed loop." },
  { q:"A connected graph is one where:", options:["There are no edges","Every vertex can reach every other vertex","Only one vertex exists","Only cycles exist"], answer:1, explanation:"A connected graph has a path between every pair of vertices — no vertex is isolated from the rest." },
  { q:"A disconnected graph is one where:", options:["Fully connected","At least one pair of vertices has no path between them","No vertices exist","Only loops exist"], answer:1, explanation:"A disconnected graph has at least one pair of vertices with no path connecting them." },
  { q:"Strongly connected (for a digraph) means:", options:["Ignore direction","Directed path exists between all pairs of vertices","Only undirected","No paths"], answer:1, explanation:"A digraph is strongly connected if there is a directed path from every vertex to every other vertex." },
  { q:"Weakly connected (for a digraph) means:", options:["Only directed paths matter","Connected when edge directions are ignored","Only loops","No edges"], answer:1, explanation:"A digraph is weakly connected if the underlying undirected graph (ignoring directions) is connected." },
  { q:"Edges in a digraph are represented as:", options:["Numbers","Ordered pairs","Unordered sets","Loops"], answer:1, explanation:"In a directed graph, each edge is an ordered pair (u, v) where direction goes from u to v." },
  { q:"A bipartite graph has vertices divided into:", options:["One set","Two disjoint sets","Three sets","Infinite sets"], answer:1, explanation:"In a bipartite graph, vertices are split into two disjoint sets such that all edges go between the sets." },
  { q:"Edges in a bipartite graph connect:", options:["Vertices in the same set","Vertices in different sets only","Only loops","Random vertices"], answer:1, explanation:"In a bipartite graph, every edge connects a vertex in one set to a vertex in the other set — no edges within the same set." },
  { q:"An Eulerian path:", options:["Visits each vertex once","Uses each edge exactly once","Uses only loops","Uses only cycles"], answer:1, explanation:"An Eulerian path traverses every edge in the graph exactly once." },
  { q:"An Eulerian circuit is:", options:["An open path","A closed Eulerian path (starts and ends at same vertex)","A path with no edges","Only loops"], answer:1, explanation:"An Eulerian circuit is an Eulerian path that starts and ends at the same vertex." },
  { q:"An Eulerian circuit exists if:", options:["All vertices have odd degree","All vertices have even degree","No edges exist","Infinite vertices"], answer:1, explanation:"An Eulerian circuit exists if and only if every vertex in the graph has even degree." },
  { q:"A Hamiltonian path:", options:["Uses each edge once","Visits each vertex exactly once","Only uses cycles","Only uses loops"], answer:1, explanation:"A Hamiltonian path visits every vertex in the graph exactly once." },
  { q:"A Hamiltonian cycle is:", options:["An open path","A closed path visiting every vertex exactly once","Only loops","Only directed"], answer:1, explanation:"A Hamiltonian cycle is a cycle that visits every vertex exactly once and returns to the starting vertex." },
  { q:"Which of the following is NOT a standard graph component?", options:["Vertices","Edges","Matrices","Paths"], answer:2, explanation:"Matrices are a mathematical tool used to represent graphs, but they are not a structural component of a graph itself." },
  { q:"Multiple edges between the same pair of vertices are allowed in:", options:["Simple graph","Multigraph","Tree","Cycle"], answer:1, explanation:"A multigraph allows multiple edges (parallel edges) between the same pair of vertices, unlike a simple graph." },
  { q:"A loop (edge from a vertex to itself) is allowed in:", options:["Simple graph","Pseudograph","Tree","Simple path"], answer:1, explanation:"A pseudograph allows loops (self-edges) in addition to possibly allowing multiple edges." }
];

// ─── SETS & RELATIONS QUESTION BANK (id=3) ────────────────────────────────────
const SR_QUESTIONS = [
  { q:"A set is:", options:["A random group of objects","An organized collection of objects","A single number","A relation only"], answer:1, explanation:"A set is a well-defined collection of objects grouped by a common property." },
  { q:"Sets are usually written using:", options:["Square brackets [ ]","Parentheses ( )","Curly brackets { }","Angle brackets < >"], answer:2, explanation:"Elements of a set are usually placed inside curly brackets." },
  { q:"Which is a listing method?", options:["A = {x : x is even}","A = {2,4,6,8,10}","A is the set of even numbers","A is shown in a Venn diagram"], answer:1, explanation:"Listing method means writing all elements directly." },
  { q:"Set builder method describes a set using:", options:["A diagram only","A variable and condition","Only numbers","Only words"], answer:1, explanation:"Set builder form uses a variable and a rule, such as {x : x is even}." },
  { q:"The set {2,4,6,8,10} is:", options:["Infinite","Empty","Finite","Universal"], answer:2, explanation:"It has a fixed number of elements, so it is finite." },
  { q:"The set {2,4,6,8,...} is:", options:["Empty","Infinite","Singleton","Universal"], answer:1, explanation:"The three dots show the pattern continues forever." },
  { q:"Universal set contains:", options:["No elements","Only one element","All elements under discussion","Only empty sets"], answer:2, explanation:"Universal set contains all possible elements relevant to the problem." },
  { q:"If A = {1,2,3,4} and B = {2,3}, then:", options:["A ⊆ B","B ⊆ A","A = B","B is empty"], answer:1, explanation:"Every element of B is inside A, so B is a subset of A." },
  { q:"Empty set contains:", options:["One element","Two elements","No elements","Infinite elements"], answer:2, explanation:"Empty set has no elements and is written as ∅ or { }." },
  { q:"Which statement is true about empty set?", options:["It is not a subset of any set","It is subset of every set","It has one element","It is always infinite"], answer:1, explanation:"Empty set is considered a subset of every set." },
  { q:"Power set means:", options:["Set of all elements","Set of all subsets","Set of all relations","Set of all products"], answer:1, explanation:"Power set contains every possible subset, including ∅ and the set itself." },
  { q:"If A has 3 elements, how many elements are in P(A)?", options:["3","6","8","9"], answer:2, explanation:"Power set size = 2ⁿ. Here n = 3, so 2³ = 8." },
  { q:"Cardinality means:", options:["Name of a set","Size of a set","Type of relation","Venn diagram"], answer:1, explanation:"Cardinality is the number of elements in a set." },
  { q:"Cardinality of {10,20,30,40,50} is:", options:["4","5","10","50"], answer:1, explanation:"The set has 5 elements." },
  { q:"A Venn diagram is used to show:", options:["Only numbers","Relationships between sets","Only ordered pairs","Only functions"], answer:1, explanation:"Venn diagrams visually show unions, intersections, and complements." },
  { q:"A ∪ B means:", options:["Intersection","Union","Complement","Cartesian product"], answer:1, explanation:"Union means all elements that are in A or B or both." },
  { q:"A ∩ B means:", options:["Elements in A only","Elements in B only","Common elements of A and B","All elements outside A"], answer:2, explanation:"Intersection means elements shared by both sets." },
  { q:"A′ means:", options:["Union of A","Complement of A","Intersection of A","Power set of A"], answer:1, explanation:"A′ means all elements in the universal set that are not in A." },
  { q:"If A = {1,2,3} and B = {3,4,5}, A ∩ B is:", options:["{1,2,3,4,5}","{3}","{1,2}","{4,5}"], answer:1, explanation:"Only 3 is common to both A and B." },
  { q:"If A = {1,2,3} and B = {3,4,5}, A ∪ B is:", options:["{3}","{1,2,3,4,5}","{1,2}","{4,5}"], answer:1, explanation:"Union includes all elements from both sets without repeating duplicates." },
  { q:"De Morgan's law says:", options:["(A ∪ B)′ = A′ ∩ B′","A ∪ B = A ∩ B","A′ = A","A × B = B × A always"], answer:0, explanation:"The complement of a union becomes the intersection of complements." },
  { q:"Cartesian product A × B contains:", options:["Common elements","Ordered pairs","Complements","Subsets only"], answer:1, explanation:"A × B contains ordered pairs where the first element is from A and second from B." },
  { q:"If A = {1,2} and B = {a,b}, then A × B is:", options:["{(1,a),(1,b),(2,a),(2,b)}","{1,2,a,b}","{(1,2),(a,b)}","{(a,1),(b,2)}"], answer:0, explanation:"Pair each element of A with each element of B." },
  { q:"If |A| = 3 and |B| = 4, then |A × B| is:", options:["7","12","3","4"], answer:1, explanation:"Number of ordered pairs = |A| × |B| = 3 × 4 = 12." },
  { q:"Cartesian product is useful in:", options:["Coordinate systems","Relational databases","Counting combinations","All of the above"], answer:3, explanation:"Cartesian products can represent coordinates, database row combinations, and counting possibilities." },
  { q:"A binary relation R from A to B is:", options:["A subset of A × B","A subset of A only","A subset of B only","A universal set"], answer:0, explanation:"A relation from A to B contains selected ordered pairs from A × B." },
  { q:"In a relation from A to B, A is called:", options:["Codomain","Domain","Power set","Complement"], answer:1, explanation:"The first set A is the domain of the relation." },
  { q:"A reflexive relation means:", options:["If xRy, then yRx","Every element is related to itself","If xRy and yRz, then xRz","No element is related"], answer:1, explanation:"Reflexive means xRx for every element x in the set." },
  { q:"A symmetric relation means:", options:["If xRy, then yRx","xRx for every x","xRy and yRz imply xRz","No ordered pairs exist"], answer:0, explanation:"Symmetric means the relation works in both directions." },
  { q:"A transitive relation means:", options:["Every element relates to itself","If xRy, then yRx","If xRy and yRz, then xRz","A relation has no pairs"], answer:2, explanation:"Transitive means if x is related to y and y is related to z, then x is related to z." }
];

// ─── NESTED QUANTIFIERS QUESTION BANK (id=5) ─────────────────────────────────
const NQ_QUESTIONS = [
  { q:"Nested quantifiers mean:", options:["One quantifier only","Two quantifiers where one is inside another","No variables","Only constants"], answer:1, explanation:"Nested quantifiers occur when one quantifier is within the scope of another." },
  { q:"∀x ∀y P(x,y) means:", options:["One x exists","For all x and all y, P holds","Only one pair satisfies P","No pair satisfies P"], answer:1, explanation:"Both variables must satisfy the condition for every possible value." },
  { q:"∀x ∃y P(x,y) means:", options:["One x works for all y","For every x there exists some y satisfying P","One y works for all x","No values satisfy P"], answer:1, explanation:"For every choice of x, we can find at least one y making P(x,y) true." },
  { q:"∃x ∀y P(x,y) means:", options:["All x work for all y","There exists one x that works for all y","For every y exists some x","No solution exists"], answer:1, explanation:"There is a specific x such that P(x,y) holds no matter what y is chosen." },
  { q:"∃x ∃y P(x,y) means:", options:["All pairs satisfy P","At least one pair (x,y) satisfies P","No pair satisfies P","Infinitely many pairs satisfy P"], answer:1, explanation:"It is enough for just one pair (x,y) to make P true." },
  { q:"The order of quantifiers:", options:["Never matters","Always gives the same result","Can change the meaning of the statement","Only matters for integers"], answer:2, explanation:"Swapping the order of mixed quantifiers (∀ and ∃) can change whether a statement is true or false." },
  { q:"Which is TRUE about quantifier order?", options:["∀x∃y always equals ∃y∀x","Order always gives the same truth value","Order can change the truth value","Both are always true"], answer:2, explanation:"∀x∃y P(x,y) and ∃y∀x P(x,y) have different meanings — order matters for mixed quantifiers." },
  { q:"∀x∀y (x + y = y + x) is:", options:["False","True","Undefined","Random"], answer:1, explanation:"Addition is commutative over all real numbers, so this holds for every x and y." },
  { q:"∀x ∃y (x = −y) is:", options:["False","True","Undefined","Only true for integers"], answer:1, explanation:"For any number x, we can always choose y = −x, which exists in the reals." },
  { q:"∃y ∀x (x + y = 10) is:", options:["True","False","Always true","True for infinitely many y"], answer:1, explanation:"No single fixed value of y can satisfy x + y = 10 for every different x." },
  { q:"Which pair of quantified statements is equivalent?", options:["∀x∀y and ∀y∀x","∀x∃y and ∃y∀x","∃x∀y and ∀x∃y","None of the above"], answer:0, explanation:"Universal quantifiers can always be swapped without changing the meaning of the statement." },
  { q:"∃x∃y P(x,y) is FALSE when:", options:["At least one pair makes P true","Every possible pair makes P false","Infinitely many pairs exist","Only one pair makes P false"], answer:1, explanation:"The existential statement is false only when no pair at all satisfies P." },
  { q:"∀x∀y P(x,y) is FALSE when:", options:["All pairs make P true","At least one pair makes P false","All pairs make P false","Infinitely many pairs satisfy P"], answer:1, explanation:"The universal statement fails the moment any single counterexample (x,y) is found." },
  { q:"∀x∃y P(x,y) is FALSE when:", options:["For some x, no y exists that satisfies P","All pairs satisfy P","At least one pair satisfies P","Infinitely many y work"], answer:0, explanation:"We need every x to have a working y; if even one x has no valid y, the statement is false." },
  { q:"∃x∀y P(x,y) is TRUE when:", options:["All x work for all y","One specific x satisfies P for every y","No x works","All pairs are false"], answer:1, explanation:"We only need to find one x that makes P(x,y) true regardless of the choice of y." },
  { q:"'Sum of two positive integers is positive' in logic is:", options:["∃x∃y (x>0 ∧ y>0 → x+y>0)","∀x∀y ((x>0 ∧ y>0) → x+y>0)","∀x∃y (x+y>0)","∃x∀y (x+y>0)"], answer:1, explanation:"For all x and y, if both are positive then their sum is positive — a universally true statement." },
  { q:"'Every real number has a multiplicative inverse except zero' in logic is:", options:["∃x (x≠0)","∀x (x≠0 → ∃y xy=1)","∀y (xy=1)","∃y (xy=1)"], answer:1, explanation:"For every non-zero x, there exists y (namely 1/x) such that xy = 1." },
  { q:"∀x∃y (x + y = 10) is:", options:["False","True","Undefined","Random"], answer:1, explanation:"For any given x, simply choose y = 10 − x, which always exists in the reals." },
  { q:"Which is NOT equivalent?", options:["∀x∀y P equals ∀y∀x P","∃x∃y P equals ∃y∃x P","∀x∃y P equals ∃y∀x P","None — all are equivalent"], answer:2, explanation:"∀x∃y P and ∃y∀x P are generally NOT equivalent; swapping mixed quantifiers changes meaning." },
  { q:"'Everyone has a friend' is best expressed as:", options:["∃x∃y F(x,y)","∀x∃y F(x,y)","∃x∀y F(x,y)","∀x∀y F(x,y)"], answer:1, explanation:"For every person x, there exists at least one person y who is their friend." },
  { q:"'There exists a student with no friends' is:", options:["∀x∃y F(x,y)","∃x∀y ¬F(x,y)","∀x∀y F(x,y)","∃x∃y F(x,y)"], answer:1, explanation:"There is some x such that for every y, x and y are not friends." },
  { q:"Negation of ∀x P(x) is:", options:["∀x ¬P(x)","∃x ¬P(x)","∃x P(x)","None of the above"], answer:1, explanation:"To negate a universal statement, flip ∀ to ∃ and negate the predicate: ¬∀x P(x) ≡ ∃x ¬P(x)." },
  { q:"Negation of ∃x P(x) is:", options:["∀x ¬P(x)","∃x ¬P(x)","∀x P(x)","None of the above"], answer:0, explanation:"To negate an existential statement, flip ∃ to ∀ and negate the predicate: ¬∃x P(x) ≡ ∀x ¬P(x)." },
  { q:"Negation of ∀x∃y P(x,y) is:", options:["∃x∀y ¬P(x,y)","∀x∃y ¬P(x,y)","∃y∀x ¬P(x,y)","None of the above"], answer:0, explanation:"Negate each quantifier in order and negate the predicate: ¬∀x∃y P ≡ ∃x∀y ¬P." },
  { q:"∀x∃y P(x,y) being true means:", options:["One fixed y works for all x","Each x has at least one corresponding y","No y exists","All y are the same"], answer:1, explanation:"For every x there is (possibly a different) y making P(x,y) true." },
  { q:"∃x∀y P(x,y) being FALSE means:", options:["All x work for all y","For every x, at least one y makes P fail","One x works","All pairs satisfy P"], answer:1, explanation:"If no x works for all y, every candidate x has some y that breaks P." },
  { q:"'Exactly one best friend' involves:", options:["Only existence","Only uniqueness","Both existence and uniqueness","Neither"], answer:2, explanation:"'Exactly one' combines ∃ (something exists) with uniqueness (no other satisfies the condition)." },
  { q:"Which formula best expresses uniqueness of y for a given x?", options:["∀x∃y B(x,y)","∃x∀y B(x,y)","∀x∃y∀z ((z≠y) → ¬B(x,z))","∃x∃y B(x,y)"], answer:2, explanation:"After asserting ∃y B(x,y), uniqueness is captured by saying any other z≠y does not satisfy B(x,z)." },
  { q:"The key rule for mixed quantifiers is:", options:["Order does not matter","Order matters and can change truth","They are always equal","They have no meaning"], answer:1, explanation:"∀x∃y and ∃y∀x express different things; always pay attention to the order." },
  { q:"The main concept of nested quantifiers is:", options:["Ignore the variables","Understand scope and order of quantifiers","Only use logical symbols","Only evaluate truth values"], answer:1, explanation:"Meaning depends on how quantifiers are arranged and what falls within each quantifier's scope." }
];

// ─── COUNTING TECHNIQUES QUESTION BANK (id=6) ─────────────────────────────────
const CT_QUESTIONS = [
  { q:"Product rule is used when:", options:["One task can be done in either way","A task is divided into steps","Common cases must be removed","Objects are placed into boxes"], answer:1, explanation:"Product rule is used when a procedure has steps. Multiply the number of choices in each step." },
  { q:"If a shirt has 4 colors and pants have 3 colors, how many outfits?", options:["7","12","9","6"], answer:1, explanation:"Choose shirt first: 4 ways. Choose pants: 3 ways. Total = 4 × 3 = 12." },
  { q:"Sum rule is used when:", options:["Two tasks happen together","One task can be done in separate non-overlapping ways","Repetition is allowed","Order matters"], answer:1, explanation:"Sum rule applies to \"either/or\" choices with no overlap." },
  { q:"A student can choose 5 math projects or 8 science projects. No project is repeated. Total choices?", options:["40","13","8","5"], answer:1, explanation:"Since the choices are separate categories, add them: 5 + 8 = 13." },
  { q:"Subtraction rule is also known as:", options:["Product principle","Pigeonhole principle","Inclusion-exclusion principle","Division principle"], answer:2, explanation:"Subtraction rule removes the common counted part, same as inclusion-exclusion." },
  { q:"Formula for two-set inclusion-exclusion is:", options:["|A ∪ B| = |A| + |B|","|A ∪ B| = |A| × |B|","|A ∪ B| = |A| + |B| − |A ∩ B|","|A ∩ B| = |A| + |B|"], answer:2, explanation:"Add both sets, then subtract the intersection because it was counted twice." },
  { q:"If |A| = 20, |B| = 15, and |A ∩ B| = 5, then |A ∪ B| = ?", options:["35","30","25","20"], answer:1, explanation:"|A ∪ B| = 20 + 15 − 5 = 30." },
  { q:"Division rule is used when:", options:["Each final result is counted multiple times equally","Choices are independent","We need to add cases","Order matters"], answer:0, explanation:"If each actual result is counted d times, divide total count by d." },
  { q:"How many ways can 4 people sit around a circular table?", options:["24","12","6","4"], answer:2, explanation:"Circular arrangements of n objects = (n−1)!\nSo, (4−1)! = 3! = 6." },
  { q:"Pigeonhole principle says:", options:["If k objects go into k boxes, one box is empty","If k+1 objects go into k boxes, at least one box has 2 or more objects","Every box has one object","Objects cannot repeat"], answer:1, explanation:"More objects than boxes guarantees at least one box gets more than one object." },
  { q:"How many students are needed to guarantee two students have the same score from 0 to 100?", options:["100","101","102","103"], answer:2, explanation:"There are 101 possible scores. With 102 students, at least two must share a score." },
  { q:"How many bit strings of length 5 are possible?", options:["10","25","32","64"], answer:2, explanation:"Each bit has 2 choices: 0 or 1.\nTotal = 2⁵ = 32." },
  { q:"A license plate has 2 letters followed by 2 digits. How many plates?", options:["26² × 10²","26 × 10","52 × 20","26² + 10²"], answer:0, explanation:"Each letter has 26 choices and each digit has 10 choices.\nTotal = 26 × 26 × 10 × 10." },
  { q:"Number of functions from a set with 3 elements to a set with 4 elements is:", options:["3⁴","4³","12","7"], answer:1, explanation:"Each of 3 domain elements can map to any of 4 codomain elements.\nTotal = 4³ = 64." },
  { q:"A permutation is:", options:["Selection where order does not matter","Arrangement where order matters","Only circular arrangement","Repetition only"], answer:1, explanation:"Permutation is an ordered arrangement." },
  { q:"Formula for r-permutation without repetition is:", options:["n! / r!","n! / (n−r)!","n! / r!(n−r)!","nʳ"], answer:1, explanation:"For ordered selection of r objects from n distinct objects, use nPr = n!/(n−r)!." },
  { q:"5P2 equals:", options:["10","20","25","120"], answer:1, explanation:"5P2 = 5!/(5−2)! = 5!/3! = 5×4 = 20." },
  { q:"Permutation with repetition allowed uses:", options:["nPr","nCr","nʳ","(n−1)!"], answer:2, explanation:"If repetition is allowed, each position has n choices. For r positions, total = nʳ." },
  { q:"How many 3-letter strings can be made from 26 letters if repetition is allowed?", options:["26 + 3","26 × 3","26³","3²⁶"], answer:2, explanation:"Each of the 3 positions has 26 choices.\nTotal = 26³." },
  { q:"A combination is:", options:["Ordered arrangement","Selection where order does not matter","Circular seating","Repeated arrangement"], answer:1, explanation:"In combinations, only the selected items matter, not their order." },
  { q:"Formula for r-combination without repetition is:", options:["n!/(n−r)!","n!/[r!(n−r)!]","nʳ","(n+r−1)!"], answer:1, explanation:"Combination formula is nCr = n!/[r!(n−r)!]." },
  { q:"6C2 equals:", options:["12","15","30","36"], answer:1, explanation:"6C2 = 6!/(2!4!) = (6×5)/(2×1) = 15." },
  { q:"Difference between permutation and combination:", options:["Permutation ignores order","Combination considers order","Permutation considers order, combination ignores order","Both are same"], answer:2, explanation:"Arrangement = permutation. Selection = combination." },
  { q:"Circular arrangement of n objects is:", options:["n!","(n−1)!","n²","nCr"], answer:1, explanation:"In a circle, rotations are considered same, so total = (n−1)!." },
  { q:"If clockwise and counterclockwise circular arrangements are considered same, formula is:", options:["(n−1)!","n!","(n−1)! / 2","n!/2"], answer:2, explanation:"Reverse arrangements are also considered same, so divide by 2." },
  { q:"Number of terms in (a+b)ⁿ is:", options:["n","n−1","n+1","2n"], answer:2, explanation:"A binomial expansion has terms from power 0 to n, so total terms = n+1." },
  { q:"Coefficients in binomial expansion are found using:", options:["Prime numbers","Pascal triangle","Division rule only","Pigeonhole principle"], answer:1, explanation:"Pascal triangle gives binomial coefficients." },
  { q:"Expansion of (x+y)² is:", options:["x² + y²","x² + 2xy + y²","x² − 2xy + y²","2x + 2y"], answer:1, explanation:"Using binomial coefficients 1,2,1:\n(x+y)² = x² + 2xy + y²." },
  { q:"In (x+y)⁴, coefficient of x²y² is:", options:["4","5","6","8"], answer:2, explanation:"The coefficient is 4C2 = 6." },
  { q:"Combination with repetition formula is:", options:["n!/(n−r)!","n!/[r!(n−r)!]","(n+r−1)!/[r!(n−1)!]","nʳ"], answer:2, explanation:"When repetition is allowed and order does not matter, use\n(n+r−1)! / [r!(n−1)!]." }
];

// ─── PROBABILITY QUESTION BANK (id=2) ────────────────────────────────────────
const PROB_QUESTIONS = [
  { q:"Statistics is mainly about:", options:["Guessing values","Collecting and analyzing data","Drawing graphs only","Solving equations"], answer:1, explanation:"Statistics involves collecting, organizing, analyzing, and interpreting data." },
  { q:"Descriptive statistics is used for:", options:["Making predictions","Summarizing existing data","Random guessing","Probability only"], answer:1, explanation:"Descriptive statistics summarizes and describes data using tables, charts, and averages." },
  { q:"Inferential statistics is used for:", options:["Drawing conclusions about a population from a sample","Only drawing graphs","Only sampling","Only counting"], answer:0, explanation:"Inferential statistics uses sample data to make inferences or predictions about a larger population." },
  { q:"Population means:", options:["A small group","The entire group under study","Only the sample","Random data"], answer:1, explanation:"A population is the complete set of individuals or items being studied." },
  { q:"A sample means:", options:["The whole population","A subset of the population","Only the average","A graph"], answer:1, explanation:"A sample is a smaller group selected from the population for study." },
  { q:"Sampling is:", options:["Removing data points","Selecting a subset from the population","Drawing graphs","Calculating the mean"], answer:1, explanation:"Sampling is the process of selecting a representative subset from a population." },
  { q:"The mean is calculated by:", options:["Multiplying all values","Sum of values ÷ number of values","Subtracting values","Dividing randomly"], answer:1, explanation:"Mean = (sum of all observations) / (number of observations)." },
  { q:"Variance measures:", options:["The mean","The spread (dispersion) of data","The sample size","An event"], answer:1, explanation:"Variance is the average of squared deviations from the mean, measuring how spread out data is." },
  { q:"Standard deviation is:", options:["The square of variance","The square root of variance","The mean","The median"], answer:1, explanation:"Standard deviation = √variance, giving spread in the same units as the original data." },
  { q:"Probability measures:", options:["Certainty","The likelihood of uncertain events","Graphs","Samples"], answer:1, explanation:"Probability quantifies how likely an event is to occur, ranging from impossible (0) to certain (1)." },
  { q:"Probability values range between:", options:["−1 to 1","0 to 1","1 to 10","−10 to 10"], answer:1, explanation:"By definition, 0 ≤ P(E) ≤ 1 for any event E." },
  { q:"A sample space is:", options:["A single event","The set of all possible outcomes","Only subsets","Only numbers"], answer:1, explanation:"The sample space S contains every possible outcome of a random experiment." },
  { q:"An event is:", options:["The whole sample space","A subset of the sample space","Only one specific outcome","A random number"], answer:1, explanation:"An event is any subset of the sample space — it may contain one or many outcomes." },
  { q:"Tossing a coin twice gives how many possible outcomes?", options:["2","3","4","6"], answer:2, explanation:"The outcomes are HH, HT, TH, TT — four equally likely results." },
  { q:"The finite probability formula is:", options:["P(E) = E + S","P(E) = |E| / |S|","P(E) = S / E","P(E) = 0"], answer:1, explanation:"For equally likely outcomes: P(E) = (number of favorable outcomes) / (total outcomes in S)." },
  { q:"The probability of an impossible event is:", options:["1","0","0.5","−1"], answer:1, explanation:"An impossible event has no favorable outcomes, so P(impossible) = 0." },
  { q:"The complement rule states P(E') =", options:["P(E)","1 − P(E)","P(E)²","0"], answer:1, explanation:"Since E and E' together cover the whole sample space: P(E) + P(E') = 1." },
  { q:"If P(E) = 0.3, then P(E') =", options:["0.3","0.7","1.3","0"], answer:1, explanation:"P(E') = 1 − P(E) = 1 − 0.3 = 0.7." },
  { q:"The union formula P(A∪B) =", options:["P(A) + P(B)","P(A) + P(B) − P(A∩B)","P(A) × P(B)","None of the above"], answer:1, explanation:"The inclusion-exclusion principle: P(A∪B) = P(A) + P(B) − P(A∩B)." },
  { q:"The conditional probability formula P(A|B) =", options:["P(A) + P(B)","P(A∩B) / P(B)","P(A) × P(B)","None of the above"], answer:1, explanation:"P(A|B) = P(A∩B) / P(B), the probability of A given that B has occurred." },
  { q:"If P(A∩B) = 0.2 and P(B) = 0.5, then P(A|B) =", options:["0.1","0.4","0.7","0.2"], answer:1, explanation:"P(A|B) = 0.2 / 0.5 = 0.4." },
  { q:"The multiplication rule states P(A∩B) =", options:["P(A) + P(B)","P(A|B) · P(B)","P(A) = P(B)","None of the above"], answer:1, explanation:"P(A∩B) = P(A|B) · P(B), derived from the definition of conditional probability." },
  { q:"Independent events satisfy:", options:["P(A∩B) = P(A) + P(B)","P(A∩B) = P(A) · P(B)","P(A) = P(B)","None of the above"], answer:1, explanation:"Events A and B are independent when knowing one occurred gives no information about the other." },
  { q:"If P(A) = 0.5 and P(B) = 0.4 and they are independent, then P(A∩B) =", options:["0.9","0.2","0.1","0.4"], answer:1, explanation:"P(A∩B) = P(A) · P(B) = 0.5 × 0.4 = 0.2." },
  { q:"Two dice rolled together give how many total outcomes?", options:["12","36","6","24"], answer:1, explanation:"Each die has 6 faces; total outcomes = 6 × 6 = 36." },
  { q:"The probability of getting a sum of 7 with two dice is:", options:["1/6","1/3","1/2","1/36"], answer:0, explanation:"Favorable pairs: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 out of 36 = 1/6." },
  { q:"A bag has 4 blue and 5 red balls. Probability of picking blue is:", options:["4/5","5/4","4/9","5/9"], answer:2, explanation:"P(blue) = 4 / (4+5) = 4/9." },
  { q:"Probability of at least one 0 in a 10-bit string is:", options:["1/1024","1023/1024","1/2","0"], answer:1, explanation:"P(all 1s) = (1/2)^10 = 1/1024; P(at least one 0) = 1 − 1/1024 = 1023/1024." },
  { q:"Using the union rule for events divisible by 2 or 5 (from 1–10), P =", options:["1/2","3/5","2/5","4/5"], answer:1, explanation:"Divisible by 2: {2,4,6,8,10}=5; by 5: {5,10}=2; by both: {10}=1. |A∪B|=6. P=6/10=3/5." },
  { q:"Bayes theorem is used for:", options:["Adding probabilities","Updating probability based on new information","Only multiplication","Only computing the mean"], answer:1, explanation:"Bayes theorem: P(A|B) = P(B|A)·P(A)/P(B). It lets us revise prior probabilities when new evidence arrives." }
];

// ─── MIXED QUESTIONS BANK (id=7) ───────────────────────────────────────────
const MIXED_QUESTIONS = [
  {
    "q": "Which statement is a tautology?",
    "options": [
      "p ∧ ¬p",
      "p ∨ ¬p",
      "¬p",
      "p → q"
    ],
    "answer": 1,
    "explanation": "A tautology is a statement that is always true. The expression p ∨ ¬p is always true because if p is true, the left side is true; if p is false, then ¬p is true."
  },
  {
    "q": "Number of functions from a 3-element set to a 2-element set?",
    "options": [
      "6",
      "8",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "For each of the 3 elements in the domain, there are 2 possible outputs. Therefore, the number of functions is 2 × 2 × 2 = 2^3 = 8."
  },
  {
    "q": "If a ∣ b and a ∣ c, then which is true?",
    "options": [
      "a ∣ (b + c)",
      "a ∣ (b − c)",
      "Both A and B",
      "None"
    ],
    "answer": 2,
    "explanation": "If a divides b and c, then b = as and c = at for integers s and t. So b + c = a(s + t) and b − c = a(s − t). Therefore, a divides both the sum and the difference."
  },
  {
    "q": "Which is NOT a proposition?",
    "options": [
      "2 + 2 = 4",
      "Close the door",
      "5 is prime",
      "Earth is round"
    ],
    "answer": 1,
    "explanation": "A proposition must be a declarative sentence that is either true or false. 'Close the door' is a command, so it has no truth value."
  },
  {
    "q": "What is −11 mod 3?",
    "options": [
      "−2",
      "−1",
      "1",
      "2"
    ],
    "answer": 2,
    "explanation": "Using the division algorithm, −11 = 3(−4) + 1. The remainder must be non-negative and less than 3, so the answer is 1."
  },
  {
    "q": "If total degree of a graph is 24, number of edges is?",
    "options": [
      "12",
      "24",
      "6",
      "48"
    ],
    "answer": 0,
    "explanation": "In an undirected graph, the sum of all vertex degrees is equal to 2E, where E is the number of edges. So 24 = 2E, hence E = 12."
  },
  {
    "q": "Size of power set of {1,2,3}?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 2,
    "explanation": "A set with n elements has 2^n subsets. Here n = 3, so the power set has 2^3 = 8 elements."
  },
  {
    "q": "Which is equivalent to ¬(p → q)?",
    "options": [
      "¬p ∨ q",
      "p ∧ ¬q",
      "¬p ∧ q",
      "p ∨ q"
    ],
    "answer": 1,
    "explanation": "The implication p → q is equivalent to ¬p ∨ q. Negating it gives ¬(¬p ∨ q), which becomes p ∧ ¬q by De Morgan's law."
  },
  {
    "q": "What is a sample space?",
    "options": [
      "Subset",
      "All possible outcomes",
      "Single event",
      "Variable"
    ],
    "answer": 1,
    "explanation": "A sample space is the set of all possible outcomes of a random experiment. For example, rolling a die has sample space {1,2,3,4,5,6}."
  },
  {
    "q": "Product rule is used to:",
    "options": [
      "Add choices",
      "Multiply choices",
      "Subtract",
      "Divide"
    ],
    "answer": 1,
    "explanation": "The product rule is used when a process has sequential tasks. If one step has m choices and the next has n choices, the total number of ways is m × n."
  },
  {
    "q": "Which graph allows loops?",
    "options": [
      "Simple graph",
      "Tree",
      "Pseudograph",
      "Path"
    ],
    "answer": 2,
    "explanation": "A pseudograph allows loops, and it may also allow multiple edges. A simple graph does not allow loops or multiple edges."
  },
  {
    "q": "If P(A) = 0, event A is:",
    "options": [
      "Certain",
      "Impossible",
      "Likely",
      "Random"
    ],
    "answer": 1,
    "explanation": "A probability of 0 means the event cannot occur. Therefore, event A is impossible."
  },
  {
    "q": "When is p → q false?",
    "options": [
      "T → T",
      "F → T",
      "T → F",
      "F → F"
    ],
    "answer": 2,
    "explanation": "A conditional statement p → q is false only when the hypothesis p is true and the conclusion q is false. In all other cases it is true."
  },
  {
    "q": "|A × B| = ?",
    "options": [
      "|A| + |B|",
      "|A||B|",
      "|A|²",
      "|B|²"
    ],
    "answer": 1,
    "explanation": "The Cartesian product A × B contains ordered pairs (a,b). For each element of A, it can pair with every element of B, so |A × B| = |A||B|."
  },
  {
    "q": "Number of 5-bit strings?",
    "options": [
      "16",
      "25",
      "32",
      "64"
    ],
    "answer": 2,
    "explanation": "Each bit has 2 choices: 0 or 1. For 5 bits, the number of bit strings is 2^5 = 32."
  },
  {
    "q": "Which is a contradiction?",
    "options": [
      "p ∨ ¬p",
      "p ∧ ¬p",
      "p",
      "q"
    ],
    "answer": 1,
    "explanation": "A contradiction is always false. The statement p ∧ ¬p can never be true because p and not p cannot both be true at the same time."
  },
  {
    "q": "∀x∃y P(x,y) vs ∃y∀x P(x,y)",
    "options": [
      "Same",
      "Different",
      "Always true",
      "Always false"
    ],
    "answer": 1,
    "explanation": "The order of mixed quantifiers matters. ∀x∃y means each x may have its own y, while ∃y∀x means one single y must work for all x."
  },
  {
    "q": "Degree of a vertex means:",
    "options": [
      "Nodes",
      "Connected edges",
      "Paths",
      "Graphs"
    ],
    "answer": 1,
    "explanation": "The degree of a vertex is the number of edges incident to, or connected to, that vertex."
  },
  {
    "q": "Universal set is:",
    "options": [
      "Empty set",
      "All elements",
      "Subset",
      "Pair"
    ],
    "answer": 1,
    "explanation": "The universal set contains all elements under discussion in a particular problem or context."
  },
  {
    "q": "For independent events, P(A ∩ B) = ?",
    "options": [
      "P(A) + P(B)",
      "P(A) × P(B)",
      "P(A) − P(B)",
      "0"
    ],
    "answer": 1,
    "explanation": "For independent events, the occurrence of one event does not affect the other. Therefore, P(A ∩ B) = P(A) × P(B)."
  },
  {
    "q": "Number of subsets of n elements?",
    "options": [
      "n",
      "2n",
      "2^n",
      "n²"
    ],
    "answer": 2,
    "explanation": "Each element has two choices: included or not included in a subset. Therefore, the total number of subsets is 2^n."
  },
  {
    "q": "Contingency is:",
    "options": [
      "Always true",
      "Always false",
      "Sometimes true/false",
      "None"
    ],
    "answer": 2,
    "explanation": "A contingency is a proposition that is true in some cases and false in other cases, depending on the truth values of its variables."
  },
  {
    "q": "p ↔ q means:",
    "options": [
      "Same truth value",
      "Always false",
      "Always true",
      "Independent"
    ],
    "answer": 0,
    "explanation": "The biconditional p ↔ q is true when p and q have the same truth value, either both true or both false."
  },
  {
    "q": "Division algorithm gives:",
    "options": [
      "Quotient",
      "Remainder",
      "Both",
      "None"
    ],
    "answer": 2,
    "explanation": "The division algorithm states that a = dq + r, where q is the quotient and r is the remainder with 0 ≤ r < d."
  },
  {
    "q": "Directed graph is called:",
    "options": [
      "Simple graph",
      "Multigraph",
      "Digraph",
      "Tree"
    ],
    "answer": 2,
    "explanation": "A directed graph, or digraph, is a graph in which edges have direction from one vertex to another."
  },
  {
    "q": "A ⊆ B means:",
    "options": [
      "A equals B",
      "A subset of B",
      "A bigger",
      "None"
    ],
    "answer": 1,
    "explanation": "A ⊆ B means every element of A is also an element of B. Therefore, A is a subset of B."
  },
  {
    "q": "Subtraction rule is used to:",
    "options": [
      "Combine",
      "Remove overlap",
      "Multiply",
      "Divide"
    ],
    "answer": 1,
    "explanation": "The subtraction rule is used to avoid double counting. When two counting cases overlap, the common part must be subtracted once."
  },
  {
    "q": "∀x P(x) is false when:",
    "options": [
      "All true",
      "One false",
      "All false",
      "None"
    ],
    "answer": 1,
    "explanation": "A universal statement ∀x P(x) means P(x) must be true for every x. If even one case is false, the whole universal statement is false."
  },
  {
    "q": "Probability range is:",
    "options": [
      "−1 to 1",
      "0 to 1",
      "1 to 2",
      "Any"
    ],
    "answer": 1,
    "explanation": "Probability values are always between 0 and 1 inclusive. 0 means impossible and 1 means certain."
  },
  {
    "q": "A function allows:",
    "options": [
      "One-to-many",
      "Many-to-one",
      "No mapping",
      "Random"
    ],
    "answer": 1,
    "explanation": "A function assigns each input exactly one output. Many different inputs may map to the same output, but one input cannot map to multiple outputs."
  }
];

async function generateQuestions(subject, level) {
  const cfg = LEVEL_CONFIG[level];
  const BATCH = 10;
  const total = cfg.count;

  // Hardcoded bank helper
  function useBank(bank, shuffleQuestions = false) {
    const questions = shuffleQuestions
      ? [...bank].sort(() => Math.random() - 0.5)
      : [...bank];

    // Strong shuffle: balanced A/B/C/D and avoids same correct answer position repeatedly
    const preparedQuestions = questions
      .slice(0, total)
      .map((q, i) => ({ ...q, level, index: i }));

    return balanceRandomizeQuestionSet(preparedQuestions);
  }




  const externalQuestionBanks = {
    8: AGI_QUESTIONS,
    9: KSI_QUESTIONS,
    10: AS_QUESTIONS,
    11: RW_QUESTIONS,
    12: CE_QUESTIONS,
    13: SAMPLERES_QUESTIONS,
    14: OP_QUESTIONS,
    15: BA_QUESTIONS,
    16: AA_QUESTIONS,
    17: SORT_QUESTIONS,
    18: SEARCH_QUESTIONS,
    19: LL_QUESTIONS,
    20: TREES_QUESTIONS,
    21: CA_INTRO_QUESTIONS,
    22: CA_NUM_QUESTIONS,
    23: CA_BOOL_QUESTIONS,
    24: CA_KMAP_QUESTIONS,
    25: CA_ILP_QUESTIONS,
    26: CA_PIPE_QUESTIONS,
    27: CA_MIPS_QUESTIONS,
    28: CA_DIGITAL_QUESTIONS,
    29: CA_CONTROL_QUESTIONS,
    30: CA_CIRCUIT_QUESTIONS,
    31: CA_MULTI_QUESTIONS,
    32: DB_INTRO_QUESTIONS,
    33: DB_ARCH_QUESTIONS,
    34: DB_ER_QUESTIONS,
    35: DB_RELATIONAL_QUESTIONS,
    36: DB_NORMALIZATION_QUESTIONS,
    38: ICS1_QUESTIONS,
    39: ICS2_QUESTIONS,
    40: ICS3_QUESTIONS,
    41: ICS4_QUESTIONS,
    42: ICS5_QUESTIONS,
    43: ICS6_QUESTIONS,
    44: ICS7_QUESTIONS,
    45: ICS8_QUESTIONS,
    46: ICS9_QUESTIONS,
    47: ICS10_QUESTIONS,
    48: DC_INTRO_QUESTIONS,
    49: DC_NET_TYPES_QUESTIONS,
    50: DC_TRANSMISSION_QUESTIONS,
    51: DC_SIGNALS_QUESTIONS,
    52: DC_OSI_QUESTIONS,
    53: DC_TCPIP_QUESTIONS,
    54: DC_SWITCHING_QUESTIONS,
    55: DC_ERROR_QUESTIONS,
    56: DC_NETWORK_DEVICES_QUESTIONS,
    57: DC_SECURITY_QUESTIONS,
    58: DC_WIRELESS_QUESTIONS,
    59: DC_MODERN_TECH_QUESTIONS,
    60: PY_BASICS,
    61: PY_CONTROL,
    62: PY_FUNCTIONS,
    63: PY_LISTS,
    64: PY_DICTS,
    65: PY_OOP,
    66: PY_FILES,
    67: PY_MIXED
  };

  if (externalQuestionBanks[subject.id]) {
    await new Promise(r => setTimeout(r, 600));
    state.questions = useBank(externalQuestionBanks[subject.id], true);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();
    return;
  }

  // Use hardcoded bank for Propositional Logic (id=0) — fixed order
  if (subject.id === 0) {
    await new Promise(r => setTimeout(r, 600));
    state.questions = useBank(PL_QUESTIONS);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();
    return;
  }

  // Use hardcoded bank for Number Theory (id=1) — fixed order
  if (subject.id === 1) {
    await new Promise(r => setTimeout(r, 600));
    state.questions = useBank(NT_QUESTIONS);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();
    return;
  }

  // Use hardcoded bank for Probability (id=2) — fixed order
  if (subject.id === 2) {
    await new Promise(r => setTimeout(r, 600));
    state.questions = useBank(PROB_QUESTIONS);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();
    return;
  }

  // Use hardcoded bank for Sets & Relations (id=3) — fixed order
  if (subject.id === 3) {
    await new Promise(r => setTimeout(r, 600));
    state.questions = useBank(SR_QUESTIONS);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();
    return;
  }

  // Use hardcoded bank for Graph Theory (id=4) — fixed order
  if (subject.id === 4) {
    await new Promise(r => setTimeout(r, 600));
    state.questions = useBank(GT_QUESTIONS);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();
    return;
  }

  // Use hardcoded bank for Nested Quantifiers (id=5) — fixed order
  if (subject.id === 5) {
    await new Promise(r => setTimeout(r, 600));
    state.questions = useBank(NQ_QUESTIONS);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();
    return;
  }

  // Use hardcoded bank for Counting Techniques (id=6) — fixed order
  if (subject.id === 6) {
    await new Promise(r => setTimeout(r, 600));
    state.questions = useBank(CT_QUESTIONS);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();
    return;
  }

  // Use hardcoded bank for Mixed Questions (id=7) — shuffled question order + shuffled answers
  if (subject.id === 7) {
    await new Promise(r => setTimeout(r, 600));
    state.questions = useBank(MIXED_QUESTIONS, true);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();
    return;
  }

  // Generate in batches to avoid timeout
  let allQuestions = [];
  const batches = Math.ceil(total / BATCH);

  try {
    for (let b = 0; b < batches; b++) {
      const batchSize = Math.min(BATCH, total - b * BATCH);
      const batch = await generateBatch(subject, level, batchSize, b);
      allQuestions = allQuestions.concat(batch);
    }

    state.questions = balanceRandomizeQuestionSet(allQuestions);
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('question-area').style.display = 'block';
    renderQuestion();

  } catch (e) {
    document.getElementById('loading-state').innerHTML = `<div style="color:var(--red);text-align:center;padding:40px">
      <div style="font-size:40px;margin-bottom:16px">⚠️</div>
      <div style="margin-bottom:12px">Failed to generate questions. Check your connection.</div>
      <button onclick="generateQuestions(state.currentSubject, state.currentLevel)" style="background:var(--accent);border:none;color:#fff;padding:10px 20px;border-radius:8px;cursor:pointer;font-family:'DM Sans',sans-serif">Retry</button>
    </div>`;
  }
}

async function generateBatch(subject, level, count, batchIndex) {
  const difficulty = {
    basic: 'straightforward recall and definition-based',
    medium: 'application and moderate problem-solving',
    advance: 'complex reasoning, proof-based, and multi-step problem-solving'
  }[level];

  const prompt = `You are a Discrete Mathematics professor creating MCQ questions from these lecture notes:

NOTES:
${subject.notes}

Generate exactly ${count} ${difficulty} MCQ questions about "${subject.name}" (batch ${batchIndex+1}).
Each question must be unique and different from previous batches.
For mathematical expressions, use plain text notation like: x^2, sqrt(x), a mod m, ∀x, ∃y, ∧, ∨, ¬, →, ↔, ∈, ⊆, ∪, ∩.

Respond ONLY with a JSON array. No preamble, no markdown backticks. Just the raw JSON array:
[
  {
    "q": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": 0,
    "explanation": "Detailed explanation of why the answer is correct, with key concepts."
  }
]

"answer" is the 0-based index of the correct option.
Make sure all 4 options are plausible. Make questions clearly worded.`;

  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await resp.json();
  const text = data.content.map(c => c.text || '').join('');
  const clean = text.replace(/```json|```/g, '').trim();
  const parsed = JSON.parse(clean);

  return parsed.map((q, i) => ({
    ...q,
    level,
    index: batchIndex * 10 + i
  }));
}

// ─── RENDER QUESTION ──────────────────────────────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.currentQ];
  const cfg = LEVEL_CONFIG[q.level];
  const total = state.questions.length;

  document.getElementById('q-counter').textContent = `${state.currentQ+1}/${total}`;
  document.getElementById('progress-fill').style.width = `${((state.currentQ+1)/total)*100}%`;

  state.answered = false;

  const html = `
    <div class="question-card" id="q-card">
      <div class="q-text">${q.q}</div>
      <div class="options" id="options-wrap">
        ${q.options.map((opt,i) => `
          <div class="option" id="opt-${i}" onclick="selectOption(${i})">
            <div class="opt-letter">${String.fromCharCode(65+i)}</div>
            <div class="opt-text">${opt}</div>
          </div>
        `).join('')}
      </div>
      <div class="explanation" id="explanation">
        <strong>💡 Explanation:</strong> ${q.explanation}
      </div>
    </div>
    <div class="quiz-actions">
      <div class="score-inline">Score: <span style="color:var(--accent);font-weight:700">${state.score}</span> pts</div>
      <button class="next-btn" id="next-btn" onclick="nextQuestion()">
        ${state.currentQ+1 < total ? 'Next Question →' : 'See Results →'}
      </button>
    </div>
  `;
  document.getElementById('question-area').innerHTML = html;

  // Re-render math
  if (window.MathJax) MathJax.typesetPromise();
}

function selectOption(idx) {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.currentQ];
  const correct = q.answer;
  const cfg = LEVEL_CONFIG[q.level];

  document.querySelectorAll('.option').forEach(el => el.classList.add('disabled'));

  const selectedEl = document.getElementById('opt-'+idx);
  const correctEl = document.getElementById('opt-'+correct);

  if (idx === correct) {
    selectedEl.classList.add('correct');
    state.score += cfg.points;
    state.correct++;
  } else {
    selectedEl.classList.add('wrong');
    correctEl.classList.add('correct');
    state.wrong++;
  }

  const expEl = document.getElementById('explanation');
  expEl.style.display = 'block';
  requestAnimationFrame(() => expEl.classList.add('visible'));
  document.getElementById('next-btn').style.display = 'block';

  if (window.MathJax) MathJax.typesetPromise();
}

function nextQuestion() {
  state.currentQ++;
  if (state.currentQ >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function showResults() {
  const total = state.questions.length;
  const pct = Math.round((state.correct / total) * 100);

  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '🎉' : pct >= 40 ? '💪' : '📚';
  const title = pct >= 80 ? 'Excellent!' : pct >= 60 ? 'Good Job!' : pct >= 40 ? 'Keep Going!' : 'Study More!';

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent = `${state.currentSubject.name} · ${LEVEL_CONFIG[state.currentLevel].label} · ${pct}% Accuracy`;
  document.getElementById('res-score').textContent = state.score + ' pts';
  document.getElementById('res-correct').textContent = state.correct;
  document.getElementById('res-wrong').textContent = state.wrong;

  // Save history
  state.quizHistory.unshift({
    subject: state.currentSubject.name,
    icon: state.currentSubject.icon,
    level: state.currentLevel,
    score: state.score,
    correct: state.correct,
    wrong: state.wrong,
    total,
    pct,
    date: new Date().toLocaleDateString()
  });
  saveHistory();
  updateScoreDisplay();
  updateSidebarStats();
  checkAchievements();
  updateAchievementUI();

  showPage('results');
}

function updateScoreDisplay() {
  const total = getTotalScore();
  document.getElementById('total-score').textContent = total;
}

function updateSidebarStats() {
  const h = state.quizHistory;
  document.getElementById('sb-quizzes').textContent = h.length;
  if (h.length === 0) {
    document.getElementById('sb-best').textContent = '—';
    document.getElementById('sb-acc').textContent = '—';
  } else {
    const best = Math.max(...h.map(x => x.score));
    const avgAcc = Math.round(h.reduce((a,x) => a + x.pct, 0) / h.length);
    document.getElementById('sb-best').textContent = best + 'pts';
    document.getElementById('sb-acc').textContent = avgAcc + '%';
  }
}

// ─── HISTORY ──────────────────────────────────────────────────────────────────
function renderHistory() {
  const el = document.getElementById('history-list');
  if (state.quizHistory.length === 0) {
    el.innerHTML = '<div class="history-empty">No quizzes completed yet.<br>Start a quiz to track your progress!</div>';
    return;
  }
  el.innerHTML = '<div class="history-list">' + state.quizHistory.map(h => `
    <div class="history-item">
      <div class="history-icon">${h.icon}</div>
      <div>
        <div class="history-subject">${h.subject}</div>
        <div class="history-meta">${h.level.toUpperCase()} · ${h.correct}/${h.total} correct · ${h.date}</div>
      </div>
      <div class="history-score" style="color:${h.pct>=80?'var(--green)':h.pct>=50?'var(--gold)':'var(--red)'}">${h.pct}%</div>
    </div>
  `).join('') + '</div>';
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const isOpen = sidebar.classList.toggle('open');
  overlay.classList.toggle('open', isOpen);
  const btn = document.getElementById('mobile-sidebar-btn');
  if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
  const btn = document.getElementById('mobile-sidebar-btn');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}
// ─── DESKTOP SIDEBAR COLLAPSE ────────────────────────────────────────────────
function toggleSidebarDesktop() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed-desktop');
}

// ─── MODULE TOGGLE ───────────────────────────────────────────────────────────
function toggleModule(modId) {
  const topics = document.getElementById(modId);
  const chevron = document.getElementById('chevron-' + modId.replace('mod-', ''));
  topics.classList.toggle('collapsed');
  chevron.classList.toggle('closed');
}


// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  { id:'first_quiz',   icon:'🎯', name:'First Step',       desc:'Complete your very first quiz.',                   check: h => h.length >= 1 },
  { id:'topic_5',      icon:'📚', name:'Knowledge Seeker',  desc:'Complete quizzes on 5 different topics.',          check: h => new Set(h.map(x=>x.subject)).size >= 5 },
  { id:'topic_all',    icon:'🌟', name:'Full Coverage',     desc:'Complete all 7 Discrete Maths topics at least once.',check: h => new Set(h.map(x=>x.subject)).size >= 7 },
  { id:'perfect',      icon:'💯', name:'Perfect Score',     desc:'Get 100% accuracy in any quiz.',                   check: h => h.some(x=>x.pct===100) },
  { id:'streak3',      icon:'🔥', name:'On Fire',           desc:'Complete 3 quizzes in a row.',                     check: h => h.length >= 3 },
  { id:'score500',     icon:'⭐', name:'Score Hunter',      desc:'Accumulate 500 total points.',                     check: h => h.reduce((a,x)=>a+x.score,0) >= 500 },
  { id:'score2000',    icon:'💎', name:'Diamond Scholar',   desc:'Accumulate 2000 total points.',                    check: h => h.reduce((a,x)=>a+x.score,0) >= 2000 },
  { id:'accuracy80',   icon:'🎖️', name:'Sharp Mind',        desc:'Finish any 3 quizzes with 80%+ accuracy.',         check: h => h.filter(x=>x.pct>=80).length >= 3 },
  { id:'quizzes10',    icon:'🏅', name:'Dedicated Learner', desc:'Complete 10 quizzes total.',                       check: h => h.length >= 10 },
  { id:'quizzes25',    icon:'🚀', name:'Quiz Master',       desc:'Complete 25 quizzes total.',                       check: h => h.length >= 25 },
  { id:'allcorrect10', icon:'✨', name:'Flawless Ten',      desc:'Get all questions correct in a 30-question quiz.',  check: h => h.some(x=>x.correct===x.total && x.total===30) },
  { id:'comeback',     icon:'💪', name:'Never Give Up',     desc:'Retry the same topic after scoring below 40%.',    check: (h,state) => {
    const lowTopics = new Set(h.filter(x=>x.pct<40).map(x=>x.subject));
    return [...lowTopics].some(t => h.filter(x=>x.subject===t).length > 1);
  }},
];

function checkAchievements() {
  const h = state.quizHistory;
  let newUnlocks = [];
  const unlocked = state.users[state.currentUser]?.achievements || {};
  ACHIEVEMENTS.forEach(a => {
    if (!unlocked[a.id] && a.check(h, state)) {
      unlocked[a.id] = new Date().toLocaleDateString();
      newUnlocks.push(a);
    }
  });
  if (state.currentUser) {
    state.users[state.currentUser].achievements = unlocked;
    saveUsers();
  }
  return newUnlocks;
}

function getUnlockedAchievements() {
  return state.users[state.currentUser]?.achievements || {};
}

function renderAchievements() {
  const unlocked = getUnlockedAchievements();
  const unlockedCount = Object.keys(unlocked).length;
  document.getElementById('ach-unlocked-count').textContent = unlockedCount;
  document.getElementById('ach-total-count').textContent = ACHIEVEMENTS.length;
  document.getElementById('stat-ach-count').textContent = ACHIEVEMENTS.length;
  document.getElementById('ach-nav-badge').textContent = unlockedCount;

  const grid = document.getElementById('achievements-grid');
  const sorted = [...ACHIEVEMENTS].sort((a,b) => (unlocked[b.id]?1:0) - (unlocked[a.id]?1:0));
  grid.innerHTML = sorted.map(a => {
    const isUnlocked = !!unlocked[a.id];
    const date = unlocked[a.id] || '';
    const progress = isUnlocked ? 100 : 0;
    return `<div class="ach-card ${isUnlocked?'unlocked':'locked'}">
      <div class="ach-card-top">
        <div class="ach-icon">${isUnlocked ? a.icon : '🔒'}</div>
        <div class="ach-card-info">
          <div class="ach-name">${a.name}</div>
          <div class="ach-desc">${a.desc}</div>
        </div>
      </div>
      <div class="ach-progress-wrap"><div class="ach-progress-fill" style="width:${progress}%"></div></div>
      <div class="ach-status">
        <span class="ach-badge">${isUnlocked ? '✓ Unlocked' : 'Locked'}</span>
        ${date ? `<span class="ach-date">${date}</span>` : ''}
      </div>
    </div>`;
  }).join('');
}

function updateAchievementUI() {
  const count = Object.keys(getUnlockedAchievements()).length;
  // stat card always shows total (12), nav badge shows unlocked count
  document.getElementById('stat-ach-count').textContent = ACHIEVEMENTS.length;
  document.getElementById('ach-nav-badge').textContent = count;
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
setLevel('basic');