const RichDataComponent = ({ htmlContent }: { htmlContent: string }) => {
  htmlContent = `<h1>The Art of Handmade Soap Making</h1>

<p>
  Soap making is a creative and rewarding craft that allows you to create
  personalized, natural products for your skin. Whether you're a beginner or an
  experienced soap maker, this guide will walk you through the basics and inspire
  you to create your own unique soap recipes.
</p>

<h2>Why Choose Handmade Soap?</h2>

<p>
  Handmade soaps are free from harsh chemicals and synthetic additives, making
  them gentler on your skin. They are also customizable, allowing you to choose
  natural ingredients that suit your skin type and preferences.
</p>

<ul>
  <li><strong>Natural Ingredients:</strong> Use oils, butters, and essential oils for a nourishing cleanse.</li>
  <li><strong>Eco-Friendly:</strong> Reduce plastic waste by using biodegradable packaging.</li>
  <li><strong>Custom Scents:</strong> Create unique fragrances with essential oils or natural extracts.</li>
</ul>

<h2>Basic Soap Making Techniques</h2>

<p>
  There are several methods for making soap, but the most popular ones are:
</p>

<ol>
  <li><strong>Melt and Pour:</strong> Perfect for beginners. Use a pre-made soap base and customize it with colors, scents, and additives.</li>
  <li><strong>Cold Process:</strong> A traditional method that involves mixing lye with oils. It requires curing time but offers full control over ingredients.</li>
  <li><strong>Hot Process:</strong> Similar to cold process, but the soap is cooked to speed up the saponification process.</li>
</ol>

<h2>Essential Ingredients for Soap Making</h2>

<p>
  To get started with soap making, you'll need a few key ingredients:
</p>

<ul>
  <li><strong>Oils:</strong> Olive oil, coconut oil, and shea butter are popular choices.</li>
  <li><strong>Lye:</strong> Sodium hydroxide (for solid soap) or potassium hydroxide (for liquid soap).</li>
  <li><strong>Essential Oils:</strong> Lavender, tea tree, and peppermint are great for fragrance and skin benefits.</li>
  <li><strong>Additives:</strong> Clays, herbs, or exfoliants like oatmeal or coffee grounds.</li>
</ul>

<h2>Tips for Beginners</h2>

<p>
  If you're new to soap making, here are some tips to help you get started:
</p>

<ul>
  <li>Always wear protective gear, such as gloves and goggles, when handling lye.</li>
  <li>Work in a well-ventilated area to avoid inhaling fumes.</li>
  <li>Start with simple recipes and gradually experiment with more complex designs.</li>
  <li>Keep a notebook to track your recipes and results.</li>
</ul>

<h2>Inspiration for Your Next Project</h2>

<p>
  Ready to start making your own soap? Here are some ideas to inspire your next creation:
</p>

<ul>
  <li><strong>Charcoal Detox Soap:</strong> Activated charcoal is great for drawing out impurities.</li>
  <li><strong>Oatmeal Honey Soap:</strong> Soothes and moisturizes dry, sensitive skin.</li>
  <li><strong>Citrus Burst Soap:</strong> Energize your mornings with a refreshing citrus blend.</li>
</ul>

<p>
  For more soap-making tips and recipes, check out our
  <a href="/soap-making-guide" style="color: blue; text-decoration: underline;">Soap Making Guide</a>.
</p>
`;

  return (
    <div
      className="rich-data"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default RichDataComponent;
