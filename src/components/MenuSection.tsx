import React, { useState } from 'react';
import { Sparkles, Info, X, ShoppingBag, Plus, Check, Wine, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types/restaurant';
import { scrollToElement } from '../utils/motion';

type CategoryKey = 'pizzas' | 'pastas_entrees' | 'desserts_drinks';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('pizzas');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [demoOrderList, setDemoOrderList] = useState<{ item: MenuItem; count: number }[]>([]);
  const [orderDrawerOpen, setOrderDrawerOpen] = useState(false);

  // Filter items
  const categoryItems = MENU_ITEMS.filter((item) => item.category === activeCategory);
  const filteredItems = categoryItems.filter((item) => {
    if (dietaryFilter === 'all') return true;
    return item.dietary.some((tag) => tag.toLowerCase().includes(dietaryFilter.toLowerCase()));
  });

  const handleAddToDemoOrder = (item: MenuItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDemoOrderList((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) => (i.item.id === item.id ? { ...i, count: i.count + 1 } : i));
      }
      return [...prev, { item, count: 1 }];
    });
  };

  const handleRemoveFromDemoOrder = (itemId: string) => {
    setDemoOrderList((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const totalOrderCount = demoOrderList.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <section id="menu" className="py-24 bg-[#F7F2EA] relative border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="scroll-reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C0392B] mb-2">
            <span>Sicilian Trattoria & Pizzeria</span>
            <span aria-hidden="true">·</span>
            <span>Crafted Fresh Daily</span>
          </div>
          <h2 className="scroll-reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight font-['Raleway']">
            Our Traditional Menu & Signature Dishes
          </h2>
          <p className="scroll-reveal text-stone-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Every dish honors our roots: hand-stretched stone-baked pizzas, slow-simmered sauces, and handmade pastas perfected across 40 years.
          </p>

          {/* Prominent Demo Notice regarding prices per prompt rules */}
          <div className="scroll-reveal mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs text-left sm:text-center">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Note:</strong> Illustrative prices — demo concept only. Actual restaurant prices and seasonal menu availability subject to confirmation.
            </span>
          </div>
        </div>

        {/* Category Navigation Tabs (Interactive Segmented Control) */}
        <div className="scroll-reveal flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => {
              setActiveCategory('pizzas');
              setDietaryFilter('all');
            }}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'pizzas'
                ? 'bg-[#C0392B] text-white shadow-md'
                : 'bg-white/80 text-stone-700 hover:bg-white hover:text-stone-900 border border-stone-200/70'
            }`}
          >
            Wood-Fired & NY Pizzas
          </button>
          <button
            onClick={() => {
              setActiveCategory('pastas_entrees');
              setDietaryFilter('all');
            }}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'pastas_entrees'
                ? 'bg-[#C0392B] text-white shadow-md'
                : 'bg-white/80 text-stone-700 hover:bg-white hover:text-stone-900 border border-stone-200/70'
            }`}
          >
            Handmade Pastas & Entrees
          </button>
          <button
            onClick={() => {
              setActiveCategory('desserts_drinks');
              setDietaryFilter('all');
            }}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'desserts_drinks'
                ? 'bg-[#C0392B] text-white shadow-md'
                : 'bg-white/80 text-stone-700 hover:bg-white hover:text-stone-900 border border-stone-200/70'
            }`}
          >
            Desserts, Wine & Beer
          </button>
        </div>

        {/* Secondary Filter Bar & Demo Order Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-300/60 text-xs sm:text-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-stone-500 font-semibold uppercase tracking-wider text-[11px]">
              Filter By:
            </span>
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter("chef's signature")}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                dietaryFilter === "chef's signature"
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
              }`}
            >
              Chef&apos;s Signature
            </button>
            <button
              onClick={() => setDietaryFilter('family recipe')}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                dietaryFilter === 'family recipe'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
              }`}
            >
              Family Recipes
            </button>
            <button
              onClick={() => setDietaryFilter('vegetarian')}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                dietaryFilter === 'vegetarian'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
              }`}
            >
              Vegetarian
            </button>
          </div>

          {/* Interactive Pitch Demo Cart/Order Button */}
          <button
            onClick={() => setOrderDrawerOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-800 hover:border-[#C0392B] font-semibold transition-all cursor-pointer shadow-sm hover:shadow"
          >
            <ShoppingBag className="w-4 h-4 text-[#C0392B]" />
            <span>Demo Order Tray</span>
            <span className="bg-[#C0392B] text-white rounded-full px-2 py-0.5 text-xs font-bold tabular-nums">
              {totalOrderCount}
            </span>
          </button>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDish(item)}
              className="scroll-reveal group bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Container with Hover Zoom and Safe Fallback */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback gradient container if external network issue
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add(
                          'bg-gradient-to-br',
                          'from-stone-800',
                          'to-stone-950',
                          'flex',
                          'items-center',
                          'justify-center'
                        );
                        parent.innerHTML = `<div class="text-center p-4 text-stone-200"><span class="text-xs uppercase tracking-widest text-[#C59B27] block mb-1">Little Italy San Antonio</span><p class="font-bold text-lg">${item.name}</p></div>`;
                      }
                    }}
                  />

                  {/* Clean unboxed tag overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.subCategory && (
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-semibold px-2.5 py-0.5 rounded shadow-sm">
                      {item.subCategory}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {item.italianName && (
                    <p className="text-xs italic text-[#C0392B] font-medium mb-1">
                      {item.italianName}
                    </p>
                  )}

                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-lg font-bold text-[#1C1917] group-hover:text-[#C0392B] transition-colors font-['Raleway']">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Ingredients Clean Unboxed List */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500">
                    {item.ingredients.map((ing, i) => (
                      <span key={ing} className="inline-flex items-center">
                        {ing}
                        {i < item.ingredients.length - 1 && <span className="mx-1 text-stone-400">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer with Price & Action */}
              <div className="p-6 pt-0 mt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-base font-extrabold text-[#1C1917] tabular-nums font-['Raleway']">
                    {item.price}
                  </span>
                  <span className="block text-[10px] text-stone-400 uppercase tracking-tight">
                    Demo Price
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleAddToDemoOrder(item, e)}
                    className="p-2 rounded-lg bg-stone-100 hover:bg-[#C0392B] text-stone-700 hover:text-white transition-colors cursor-pointer"
                    title="Add to Demo Order"
                    aria-label={`Add ${item.name} to demo order`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedDish(item)}
                    className="text-xs font-bold text-[#C0392B] hover:text-[#96281B] px-2 py-1 underline cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catering & Special Order Callout Banner */}
        <div className="scroll-reveal mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#1C1917] to-[#2B231F] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C59B27] block mb-1">
              Events & Large Gatherings
            </span>
            <h3 className="text-2xl font-bold font-['Raleway']">
              Planning a Family Dinner, Rehearsal or Party?
            </h3>
            <p className="text-stone-300 text-sm mt-2 leading-relaxed">
              We offer full banquet pans of our signature chicken parmesan, baked gnocchi, and Sicilian cannoli for pick-up or private dining in San Antonio.
            </p>
          </div>
          <button
            onClick={() => scrollToElement('catering')}
            className="px-6 py-3.5 rounded-lg bg-[#C0392B] hover:bg-[#96281B] text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            Explore Catering & Banquets
          </button>
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-stone-100">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  {selectedDish.italianName && (
                    <p className="text-xs text-[#C59B27] italic font-semibold">
                      {selectedDish.italianName}
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-white font-['Raleway']">
                    {selectedDish.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-extrabold text-[#C0392B] tabular-nums font-['Raleway']">
                  {selectedDish.price}
                </span>
                <span className="text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded">
                  Illustrative Demo Price
                </span>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed mb-5">
                {selectedDish.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Featured Key Ingredients
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDish.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    handleAddToDemoOrder(selectedDish);
                    setSelectedDish(null);
                    setOrderDrawerOpen(true);
                  }}
                  className="flex-1 py-3 rounded-lg bg-[#C0392B] hover:bg-[#96281B] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add to Demo Order Tray
                </button>
                <button
                  onClick={() => setSelectedDish(null)}
                  className="px-4 py-3 rounded-lg border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Demo Order Slide-over Drawer */}
      {orderDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-md w-full bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#C0392B]" />
                  <h3 className="font-bold text-lg text-stone-900 font-['Raleway']">
                    Demo Order Tray ({totalOrderCount} items)
                  </h3>
                </div>
                <button
                  onClick={() => setOrderDrawerOpen(false)}
                  className="p-1.5 rounded-md text-stone-500 hover:text-stone-900"
                  aria-label="Close tray"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/80 text-amber-900 text-xs mb-4">
                This is an interactive simulation demonstrating online ordering flow for client review. No actual payment will be processed.
              </div>

              {demoOrderList.length === 0 ? (
                <div className="text-center py-12 text-stone-500">
                  <UtensilsCrossed className="w-10 h-10 mx-auto text-stone-300 mb-2" />
                  <p className="text-sm">Your demo order tray is empty.</p>
                  <p className="text-xs text-stone-400 mt-1">
                    Click &ldquo;+&rdquo; on any menu item to test the ordering experience.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {demoOrderList.map(({ item, count }) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-3 bg-stone-50"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-stone-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-stone-500">
                          {count} × {item.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleRemoveFromDemoOrder(item.id)}
                          className="p-1 rounded text-stone-400 hover:text-red-600 transition-colors"
                          title="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-3">
              <button
                onClick={() => {
                  setOrderDrawerOpen(false);
                  scrollToElement('reservations');
                }}
                disabled={demoOrderList.length === 0}
                className="w-full py-3.5 rounded-lg bg-[#C0392B] hover:bg-[#96281B] text-white font-bold text-xs uppercase tracking-wider disabled:opacity-50 transition-colors cursor-pointer"
              >
                Proceed to Reservation / Pickup Form
              </button>
              <button
                onClick={() => setOrderDrawerOpen(false)}
                className="w-full py-2.5 rounded-lg border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 cursor-pointer"
              >
                Continue Browsing Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
