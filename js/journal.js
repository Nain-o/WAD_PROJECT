
document.addEventListener('DOMContentLoaded', () => {

  const posts = {
    post1: {
      tag:   'Baking Tips',
      title: "Why Your Cinnamon Buns Aren't Rising (And How to Fix It)",
      meta:  '12 June 2026 · 4 min read',
      body: `
        <p>If you've ever pulled a tray of cinnamon buns out of the oven and found them dense, flat, and nothing like what you imagined, you're in good company. This is the single most common question we get from home bakers, and the answer is almost always the same: the water was too hot.</p>
        <h3>The yeast problem</h3>
        <p>Active dry yeast and instant yeast both die above roughly 45 °C. When you dissolve yeast in water that's too hot — say, water you've just boiled and "cooled a bit" — you've already killed it before the dough even comes together. The buns will look fine going into the proofer, but they'll never rise properly.</p>
        <p>Our test: dip your wrist into the water. It should feel comfortably warm, like a bath. If it feels hot, wait. It takes less than two minutes to cool down to the right range, and it saves the whole batch.</p>
        <h3>Other culprits</h3>
        <ul>
          <li><strong>Cold kitchen.</strong> Yeast needs warmth to activate. If your kitchen is below 20 °C, proof the dough in your oven with just the light on — the bulb generates enough warmth.</li>
          <li><strong>Old yeast.</strong> Yeast has a shelf life. If yours has been open for more than three months, test it first: dissolve a teaspoon in warm water with a pinch of sugar. If it doesn't foam within 10 minutes, buy a fresh packet.</li>
          <li><strong>Too much flour.</strong> A stiff dough can't expand properly. Cinnamon bun dough should feel slightly tacky — not sticky, but definitely soft.</li>
        </ul>
        <h3>The fix for next time</h3>
        <p>Use a thermometer. A simple instant-read probe takes the guesswork out entirely. We aim for 38–40 °C for the water, and we've never had a flat batch since we started being precise about it.</p>
        <p>Happy baking — and if you'd rather just eat one instead of making them, ours come out of the oven every morning around 8am.</p>
      `
    },
    post2: {
      tag:   'Kitchen Stories',
      title: '4:30 AM: What the Bakery Looks Like Before Anyone Arrives',
      meta:  '5 June 2026 · 6 min read',
      body: `
        <p>The alarm goes at 4:15. By 4:30 I'm unlocking the back door of the bakery, flipping on the kitchen lights, and turning on the deck oven to preheat. The street outside is quiet. Parklands doesn't really start moving until about 6:30.</p>
        <h3>The first hour</h3>
        <p>The first thing that happens every morning is the sourdough. The loaves were shaped and retarded overnight in the fridge — now they go straight from cold into a hot oven. That's the magic of cold fermentation: the crust sets before the crumb has time to spread, which is how you get that open, irregular crumb structure.</p>
        <p>While the sourdough bakes, I start the laminated doughs. Croissants and cinnamon buns need the butter to be cold and pliable — not melted, not rock-hard. At 4:30 in the morning the kitchen is still cool enough to work with, which is part of why we start so early.</p>
        <h3>What it actually smells like</h3>
        <p>People always ask. The short answer: caramelised crust and warm butter, with an undercurrent of yeast that's hard to describe but immediately recognisable as "bakery." By the time the cinnamon buns hit the oven around 6am, the whole building smells of brown sugar and spice. That's usually when I make myself a coffee and take five minutes.</p>
        <h3>Why I like this part of the day</h3>
        <p>There's no pressure yet. No customers waiting, no orders to chase, no phone notifications. It's just the work — the actual physical process of making things with your hands. I think that's what I was looking for when I started this bakery: a job where the output is something real and immediate, where you know by the smell whether it's going right.</p>
        <p>Come in early sometime and I'll make you a coffee while the croissants are still warm. That's the best time to visit.</p>
      `
    },
    post3: {
      tag:   'Recipes',
      title: "Our Red Velvet: The Recipe We've Tweaked Every Year Since 2019",
      meta:  '28 May 2026 · 8 min read',
      body: `
        <p>Red velvet is one of those cakes that looks simple and isn't. The colour is the obvious part — but what actually makes a good red velvet is the texture, and that comes down to the chemistry between buttermilk and bicarbonate of soda.</p>
        <h3>What makes it tender</h3>
        <p>Buttermilk is acidic. When it reacts with bicarbonate of soda (baking soda), it creates bubbles that lighten the crumb. The acidity also breaks down the gluten slightly, which is why red velvet has that distinctive soft, almost velvety bite — not fluffy like a vanilla sponge, but not dense either.</p>
        <p>We add a tablespoon of white vinegar on top of the buttermilk. Most recipes skip this, but it intensifies the reaction and gives you a slightly more tender crumb. It sounds like a lot but you don't taste it in the finished cake.</p>
        <h3>The quantities we use (makes three 20cm layers)</h3>
        <ul>
          <li>300g plain flour</li>
          <li>2 tbsp cocoa powder (not Dutch-process)</li>
          <li>1 tsp bicarbonate of soda</li>
          <li>½ tsp fine salt</li>
          <li>240ml buttermilk</li>
          <li>1 tbsp white wine vinegar</li>
          <li>2 tsp red gel food colouring</li>
          <li>240ml neutral oil (sunflower or vegetable)</li>
          <li>300g caster sugar</li>
          <li>2 large eggs</li>
          <li>1 tsp vanilla extract</li>
        </ul>
        <h3>The method that changed everything</h3>
        <p>We mix wet into dry rather than creaming butter and sugar. Oil-based cakes stay moist longer than butter-based ones — important when you're selling cakes that might sit in a box for a day before someone cuts into them. Mix until just combined; overmixing develops gluten and makes the crumb tough.</p>
        <h3>The frosting</h3>
        <p>Cream cheese frosting, always. We use equal parts cream cheese and butter, icing sugar to taste, and a squeeze of lemon. It should be thick enough to hold a swirl but spreadable enough to coat the sides cleanly. Chill it for 20 minutes before using if your kitchen is warm.</p>
        <p>The full recipe with timings is something we share at our occasional baking mornings — watch the journal for the next date.</p>
      `
    },
    post4: {
      tag:   'Seasonal',
      title: "What We're Baking This June: Tropical Flavours & Light Layers",
      meta:  '18 May 2026 · 5 min read',
      body: `
        <p>June in Nairobi is cool and grey, and somehow that makes tropical flavours feel even more appropriate — a little brightness in the middle of the long rains.</p>
        <h3>What's on the testing table</h3>
        <p>We've been working on two new items that might make it onto the July menu, depending on how the tasting goes:</p>
        <p><strong>Mango curd cupcakes.</strong> A light vanilla base with a hidden pocket of mango curd and a whipped cream cheese frosting. The curd is made from scratch with fresh Kenyan mangoes — the small, sweet ones you find at the roadside stalls in Westlands. We've done three test batches so far. The second one was the best but the curd was too loose. Still working on the set.</p>
        <p><strong>Coconut-lime loaf.</strong> Inspired by a cake Adelight's mother used to make, this is a dense, moist loaf with desiccated coconut in the batter and a lime drizzle on top. It's closer to a tea cake than a dessert — something to slice thin and eat with coffee. This one is nearly ready.</p>
        <h3>What's already on the menu for June</h3>
        <p>The iced lavender latte is back as our café special — it disappeared from the board last August and people kept asking for it. We're also running brown butter banana bread on weekends while the local bananas are at peak ripeness.</p>
        <h3>What to expect in July</h3>
        <p>We're planning a passion fruit tart and possibly a pineapple upside-down cake. Follow the journal or come in and ask Tiphanie at the counter — she usually knows what's coming before it's announced anywhere.</p>
      `
    },
    post5: {
      tag:   'Baking Tips',
      title: "The One Thing Home Bakers Always Skip (But Shouldn't)",
      meta:  '10 May 2026 · 5 min read',
      body: `
        <p>We teach occasional baking mornings here at Hearth & Crumb, and in every single session, the same issue comes up within the first twenty minutes: someone has measured their flour by scooping the cup directly into the bag.</p>
        <p>This is the single biggest source of inconsistency in home baking, and it's easy to fix.</p>
        <h3>Why cups are unreliable</h3>
        <p>When you scoop a measuring cup directly into a bag of flour, you compact it. Depending on how firmly you press and how settled the flour is, a single "cup" can weigh anywhere from 120g to 180g. That's a 50% variation in your most important ingredient. A cake recipe that calls for 2 cups of flour is assuming roughly 240–250g. If you scoop and get 360g, you have a fundamentally different cake.</p>
        <h3>The fix: a kitchen scale</h3>
        <p>A basic digital kitchen scale costs less than a bag of good flour. Tare it before each ingredient, weigh directly into the bowl, and you'll never have a dense, dry cake from over-flouring again. Professional recipes (including all of ours) are written in grams for exactly this reason.</p>
        <h3>If you genuinely only have cups</h3>
        <p>Use the spoon-and-level method: spoon flour into the cup from the bag (don't scoop), then level the top with a straight edge. It's slower but more consistent than scooping. You'll still get some variation, but it's much less dramatic.</p>
        <p>Start weighing. It will change your baking more than any new technique or expensive ingredient ever will.</p>
      `
    },
    post6: {
      tag:   'Kitchen Stories',
      title: 'The Customer Who Changed How We Write Our Menu',
      meta:  '2 May 2026 · 4 min read',
      body: `
        <p>It was a Tuesday morning, not particularly busy. A woman came in — a regular, someone who'd been in maybe four or five times — and stood at the counter for a long time looking at the board before she asked: "What's laminated dough?"</p>
        <p>I explained it: dough with layers of butter folded in, like a croissant. She nodded, then said: "Why didn't you just say that on the board?"</p>
        <h3>The problem with bakery language</h3>
        <p>We'd written our menu the way bakers talk to each other. "72-hour laminated dough." "Cold-proofed sourdough." "Swiss meringue buttercream." These terms mean something precise and useful to us — but to someone who just wants to know if a pastry is flaky or soft, they're not helpful at all.</p>
        <p>That afternoon, Tiphanie and I sat down and rewrote every description on the board. Not dumbing it down — just translating. "Laminated dough" became "layers of butter folded into the pastry, like a croissant." "Swiss meringue buttercream" became "light, silky frosting made from whipped egg whites and butter."</p>
        <h3>What changed</h3>
        <p>People started asking fewer clarifying questions and spending more time actually deciding what they wanted. The queue moved faster. We sold more pain au chocolat in the two weeks after the rewrite than in the month before — probably because people finally understood what was inside it.</p>
        <p>The lesson wasn't that customers don't care about craft. They do — a lot. It's that they care about the experience of the food, not the vocabulary of the kitchen. Our job is to translate between the two.</p>
        <p>We still use the proper terms here in the journal, because here people have opted in to the longer version. But on the board, plain language wins.</p>
      `
    }
  };

   const filterBtns  = document.querySelectorAll('#journalFilters .filter-btn');
  const postCards   = document.querySelectorAll('.journal-post');
  const countEl     = document.getElementById('journalCount');

  function updateCount(active) {
    const n = active === 'all'
      ? postCards.length
      : [...postCards].filter(p => p.dataset.category === active).length;
    countEl.textContent = `Showing ${n} post${n === 1 ? '' : 's'}`;
  }

  function applyFilter(selected) {
    postCards.forEach(card => {
      const hide = selected !== 'all' && card.dataset.category !== selected;
      card.classList.toggle('hidden', hide);
    });
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === selected);
    });
    updateCount(selected);
  }

  filterBtns.forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));
  updateCount('all');

  const modalEl    = document.getElementById('postModal');
  const bsModal    = new bootstrap.Modal(modalEl);
  const modalTag   = document.getElementById('postModalTag');
  const modalTitle = document.getElementById('postModalTitle');
  const modalMeta  = document.getElementById('postModalMeta');
  const modalBody  = document.getElementById('postModalBody');

  document.querySelectorAll('.journal-read-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const data = posts[btn.dataset.post];
      if (!data) return;

      modalTag.textContent   = data.tag;
      modalTitle.textContent = data.title;
      modalMeta.innerHTML    = `<i class="bi bi-calendar3 me-1"></i>${data.meta}`;
      modalBody.innerHTML    = data.body;

      bsModal.show();
    });
  });

  const newsletterForm = document.getElementById('newsletterForm');
  const emailInput     = document.getElementById('newsletter-email');
  const feedback       = document.getElementById('newsletter-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const val   = emailInput.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

      if (valid) {
        feedback.style.color = 'var(--chalk-white)';
        feedback.textContent = "✓ You're on the list! First note arrives within a fortnight.";
        emailInput.classList.remove('is-invalid');
        newsletterForm.reset();
      } else {
        feedback.style.color = '#f4a26b';
        feedback.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('is-invalid');
        emailInput.focus();
      }
    });

    emailInput.addEventListener('input', () => {
      emailInput.classList.remove('is-invalid');
      feedback.textContent = '';
    });
  }

});
