export interface Article {
  slug: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
    quote: string;
    conclusion: string;
  };
}

export const articlesData: Record<string, Article> = {
  "nashville-choy-dishes": {
    slug: "nashville-choy-dishes",
    title: "3 must-try dishes at Nashville's Chinese-meets-Southern hotspot Choy",
    date: "August 20, 2022",
    author: {
      name: "Tracey Wilson",
      avatar: "/figmaAssets/image-2.png",
    },
    image: "/figmaAssets/image.png",
    excerpt: "The local dining scene has just been heating up year after year, and one of the hottest new players on the scene is Choy in Nashville, dubbed one of The Infatuation's best new restaurants in 2024.",
    content: {
      intro: "The local dining scene has just been heating up year after year, and one of the hottest new players on the scene is Choy in Nashville, dubbed one of The Infatuation's best new restaurants in 2024. This fusion restaurant brings together the best of Chinese and Southern cuisines in unexpected and delightful ways.\n\nFrom classic dim sum with a Southern twist to innovative entrees that honor both culinary traditions, Choy represents the future of American dining. Here are three dishes you absolutely cannot miss on your visit.",
      sections: [
        {
          title: "Kung Pao Fried Chicken",
          content: "This is where East truly meets South. Taking the beloved Southern fried chicken and elevating it with the bold, spicy flavors of Kung Pao sauce creates a dish that's both familiar and excitingly new. The chicken is perfectly crispy on the outside while remaining juicy inside, and the sauce provides just the right amount of heat and tang.\n\nServed with pickled vegetables and scallions, this dish showcases how two distinct culinary traditions can create something greater than the sum of their parts.",
        },
        {
          title: "Hot Honey Char Siu Pork Belly",
          content: "Char siu pork gets a Southern makeover with the addition of hot honey glaze. The result is a perfectly balanced dish that hits all the flavor notes - sweet, savory, spicy, and umami. The pork belly is cooked to perfection, with a caramelized exterior and melt-in-your-mouth texture.\n\nThis dish comes with house-made biscuits and collard greens, creating a complete experience that celebrates both culinary heritages.",
        },
        {
          title: "Smoked Brisket Dumplings",
          content: "Perhaps the most innovative dish on the menu, these dumplings feature Texas-style smoked brisket wrapped in delicate dumpling wrappers. Served with a bourbon-spiked dipping sauce, they represent the pinnacle of fusion cooking.\n\nThe smokiness of the brisket pairs beautifully with the subtle sweetness of the sauce, while the dumpling wrapper provides the perfect vessel for this unique creation.",
        },
      ],
      quote: "Choy isn't just a restaurant; it's a celebration of how food can bring different cultures together in the most delicious way possible.",
      conclusion: "Choy represents a new wave of American dining that embraces fusion without losing respect for the traditions it builds upon. Whether you're a Nashville local or just visiting, these three dishes offer a taste of something truly special. Make your reservation today and experience the magic of Chinese-Southern fusion done right.",
    },
  },
  "technology-workplace-impact": {
    slug: "technology-workplace-impact",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    author: {
      name: "Jason Francisco",
      avatar: "/figmaAssets/image-2.png",
    },
    image: "/figmaAssets/image.png",
    excerpt: "Technology has fundamentally transformed how we work, communicate, and collaborate in modern workplaces. From remote work to AI automation, the digital revolution continues to reshape professional environments.",
    content: {
      intro: "Technology has fundamentally transformed how we work, communicate, and collaborate in modern workplaces. From remote work to AI automation, the digital revolution continues to reshape professional environments.\n\nThe pace of technological change in the workplace has accelerated dramatically over the past decade, fundamentally altering everything from communication patterns to productivity metrics.",
      sections: [
        {
          title: "Remote Work Revolution",
          content: "The shift to remote and hybrid work models has been one of the most significant workplace transformations. Cloud-based tools and video conferencing platforms have made it possible for teams to collaborate effectively from anywhere in the world.\n\nThis change has brought both opportunities and challenges, from increased flexibility and work-life balance to concerns about team cohesion and company culture.",
        },
        {
          title: "Automation and AI",
          content: "Artificial intelligence and automation are increasingly handling routine tasks, freeing employees to focus on more creative and strategic work. From chatbots handling customer service to AI-powered analytics providing business insights, these technologies are reshaping job roles across industries.\n\nWhile some fear job displacement, the reality is more nuanced - technology is creating new roles while transforming existing ones.",
        },
        {
          title: "Communication and Collaboration",
          content: "Modern collaboration tools have revolutionized how teams work together. Project management platforms, instant messaging, and shared document editing have made real-time collaboration seamless, regardless of physical location.\n\nHowever, the always-on nature of these tools has also raised concerns about work-life boundaries and digital burnout.",
        },
      ],
      quote: "Technology is best when it brings people together and enhances human capabilities rather than replacing them.",
      conclusion: "The impact of technology on the workplace will continue to evolve. Success in this new landscape requires organizations to balance technological innovation with human needs, ensuring that technology serves to enhance rather than replace the human elements that make workplaces thrive. By embracing change while maintaining focus on people, companies can harness technology's full potential.",
    },
  },
};

export const getAllArticles = (): Article[] => {
  return Object.values(articlesData);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData[slug];
};
