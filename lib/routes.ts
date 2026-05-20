export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "1. Backend",
    href: "/backend-engineering",
    items: [
      {
        title: "1.1. Fundamentals",
        href: "/fundamentals",
        items: [
          { title: "1.1.1. TCP / UDP", href: "/tcp-udp" },
          { title: "1.1.2. HTTP", href: "/http" },
          { title: "1.1.3. REST", href: "/rest" },
          { title: "1.1.4. GraphQL", href: "/graphql" },
          { title: "1.1.5. gRPC", href: "/grpc" },
          { title: "1.1.6. WebSockets", href: "/websockets" },
          { title: "1.1.7. Webhooks", href: "/webhooks" },
          { title: "1.1.8. SSE", href: "/sse" },
          { title: "1.1.9. WebRTC", href: "/webrtc" },
          { title: "1.1.10. Routing", href: "/routing" },
          { title: "1.1.11. Serialization", href: "/serialization" },
          { title: "1.1.12. Stateless vs Stateful", href: "/stateless-vs-stateful" },
        ],
      },

      {
        title: "1.2. Security",
        href: "/security",
        items: [
          {
            title: "1.2.1. Authentication",
            href: "/authentication",
            items: [
              {
                title: "Basic Authentication",
                href: "/basic-authentication",
              },
              {
                title: "Token Based Authentication",
                href: "/token-based-authentication",
              },
              {
                title: "OAuth Authentication",
                href: "/oauth-authentication",
              },
            ],
          },

          {
            title: "1.2.2. Authorization",
            href: "/authorization",
            items: [
              { title: "RBAC", href: "/rbac" },
              { title: "ABAC", href: "/abac" },
            ],
          },

          { title: "Rate Limiting", href: "/rate-limiting" },
          { title: "CSRF", href: "/csrf" },
          { title: "XSS", href: "/xss" },
          { title: "SQL Injection", href: "/sql-injection" },
        ],
      },

      {
        title: "1.3. Spring Boot",
        href: "/spring-boot",
        items: [
          { title: "Core Spring", href: "/core-spring" },
          { title: "Spring Boot", href: "/spring-boot-core" },
          { title: "Spring JPA", href: "/spring-jpa" },
          { title: "Spring Security", href: "/spring-security" },
          { title: "Transactions", href: "/transactions" },
          { title: "Background Tasks", href: "/background-tasks" },
          {
            title: "Test Driven Development",
            href: "/test-driven-development",
          },
          { title: "Code Quality", href: "/code-quality" },
        ],
      },

      {
        title: "1.4. Production",
        href: "/production",
        items: [
          { title: "Observability", href: "/observability" },
          { title: "Logging", href: "/logging" },
          { title: "Tracing", href: "/tracing" },
          { title: "Monitoring", href: "/monitoring" },
        ],
      },
    ],
  },

  {
    title: "2. System Design",
    href: "/system-design",
    items: [
      {
        title: "2.1. Fundamentals",
        href: "/fundamentals",
        items: [
          { title: "Scalability", href: "/scalability" },
          { title: "Availability", href: "/availability" },
          { title: "Reliability", href: "/reliability" },
          { title: "Consistency", href: "/consistency" },
          { title: "Partitioning", href: "/partitioning" },
          { title: "Replication", href: "/replication" },
          { title: "CAP Theorem", href: "/cap-theorem" },
        ],
      },

      {
        title: "2.2. Patterns",
        href: "/patterns",
        items: [
          { title: "Pub / Sub", href: "/pub-sub" },
          { title: "Queue Based", href: "/queue-based" },
          { title: "Stream Processing", href: "/stream-processing" },
          { title: "Sharding", href: "/sharding" },
          { title: "Load Balancing", href: "/load-balancing" },
          { title: "Api Gateway", href: "/api-gateway" },
          { title: "Leader Election", href: "/leader-election" },
          { title: "CQRS", href: "/cqrs" },
          { title: "Event Sourcing", href: "/event-sourcing" },
          
        ],
      },

      {
        title: "2.3. Real World",
        href: "/real-world",
        items: [
          { title: "Netflix", href: "/netflix" },
          { title: "Uber", href: "/uber" },
          { title: "Amazon", href: "/amazon" },
          { title: "YouTube", href: "/youtube" },
          { title: "WhatsApp", href: "/whatsapp" },
          { title: "Discord", href: "/discord" },
        ],
      },

      {
        title: "2.4. Interview",
        href: "/interview",
        items: [
          { title: "URL Shortener", href: "/url-shortener" },
          { title: "Chat System", href: "/chat-system" },
          {
            title: "Notification System",
            href: "/notification-system",
          },
          { title: "Video Streaming", href: "/video-streaming" },
          { title: "Ride Sharing", href: "/ride-sharing" },
        ],
      },

      {
        title: "2.5. Tradeoffs",
        href: "/tradeoffs",
        items: [
          { title: "SQL vs NoSQL", href: "/sql-vs-nosql" },
          { title: "Sync vs Async", href: "/sync-vs-async" },
          { title: "Vertical vs Horizontal", href: "/vertical-vs-horizontal",},
        ],
      },
    ],
  },

  {
    title: "3. Distributed Systems",
    href: "/distributed-systems",
    items: [
      {
        title: "3.1. Fundamentals",
        href: "/fundamentals",
        items: [
          {
            title: "Distributed Computing",
            href: "/distributed-computing",
          },
          {
            title: "Distributed Storage",
            href: "/distributed-storage",
          },
          { title: "Clocks", href: "/clocks" },
          { title: "Consensus", href: "/consensus" },
          { title: "Fault Tolerance", href: "/fault-tolerance" },
          {
            title: "Distributed Logging",
            href: "/distributed-logging",
          },
          {
            title: "Distributed Locking",
            href: "/distributed-locking",
          },
          {
            title: "Distributed Transactions",
            href: "/distributed-transactions",
          },
        ],
      },

      {
        title: "3.2. Kafka",
        href: "/kafka",
        items: [
          { title: "Partitions", href: "/partitions" },
          { title: "Replication", href: "/replication" },
          { title: "Consumer Groups", href: "/consumer-groups" },
          { title: "Exactly Once", href: "/exactly-once" },
          { title: "Stream Processing", href: "/stream-processing" },
        ],
      },

      {
        title: "3.3. Event Driven",
        href: "/event-driven",
        items: [
          { title: "Event Sourcing", href: "/event-sourcing" },
          { title: "Outbox Pattern", href: "/outbox-pattern" },
          { title: "Saga", href: "/saga" },
          {
            title: "Choreography vs Orchestration",
            href: "/choreography-vs-orchestration",
          },
        ],
      },

      {
        title: "3.4. Distributed Storage",
        href: "/distributed-storage",
        items: [{ title: "Cassandra", href: "/cassandra" }],
      },

      {
        title: "3.5. Coordination",
        href: "/coordination",
        items: [{ title: "ZooKeeper", href: "/zookeeper" }],
      },
    ],
  },

  {
    title: "4. DevOps",
    href: "/devops",
    items: [
      { title: "4.1. Docker", href: "/docker" },
      { title: "4.2. AWS", href: "/aws" },
      { title: "4.3. NGINX", href: "/nginx" },
    ],
  },

  {
    title: "5. Software Architecture",
    href: "/software-architecture",
    items: [
      {
        title: "5.1. Design Patterns",
        href: "/design-patterns",
      },
    ],
  },
];