/* -----------------------------------------
   previewtool.js
----------------------------------------- */
// Landon Stucki
// 5-29-2025
document.addEventListener("DOMContentLoaded", () => {
    /* -----------------------------------------
       Product Header
    ----------------------------------------- */
    // Initialize product header text.
    const productName = "Blue stainless steel 32 oz";
    document.getElementById("product-header").textContent = productName;

    /* -----------------------------------------
       Overlay Text + Font
    ----------------------------------------- */
    // Cache overlay text elements and corresponding inputs.
    const overlayLine1 = document.getElementById("overlay-line1");
    const overlayLine2 = document.getElementById("overlay-line2");
    const inputLine1   = document.getElementById("input-line1");
    const inputLine2   = document.getElementById("input-line2");
    const font1Select  = document.getElementById("font1");
    const font2Select  = document.getElementById("font2");

    // Update overlayLine1 when user types.
    inputLine1.addEventListener("input", () => {
        overlayLine1.textContent = inputLine1.value;
    });
    // Update overlayLine2 when user types.
    inputLine2.addEventListener("input", () => {
        overlayLine2.textContent = inputLine2.value;
    });

    // Change overlayLine1 font on selection.
    font1Select.addEventListener("change", () => {
        overlayLine1.style.fontFamily = font1Select.value;
    });
    // Change overlayLine2 font on selection.
    font2Select.addEventListener("change", () => {
        overlayLine2.style.fontFamily = font2Select.value;
    });

    /* -----------------------------------------
       Library & Template Browser
    ----------------------------------------- */
    // Cache library container, template browser, and overlay image slot.
    const libraryContainer = document.getElementById("library-selector");
    const templateBrowser  = document.getElementById("template-browser");
    const overlayImage     = document.getElementById("overlay-image");

    // Define available libraries and their templates.
    const libraries = [
        { name:"Magic",       templates:["wizard_realm/broom1.png","wizard_realm/castle1.png","wizard_realm/owl1.png","wizard_realm/wand1.png"] },
        { name:"Space",       templates:["space_realm/blaster1.png","space_realm/helmet1.png","space_realm/ship1.png"] },
        { name:"Norse Myth",  templates:["norse_myth/axesymbol1.png","norse_myth/hammersymbol1.png","norse_myth/ravens1.png","norse_myth/wolf1.png"] },
        { name:"Astrology",   templates:["astrology/crab.png","astrology/lion.png","astrology/ram1.png","astrology/twoface.png"] },
        { name:"Birth Flower",templates:["birth_flowers/janflower.png","birth_flowers/febflower.png","birth_flowers/marflower.png","birth_flowers/aprflower.png","birth_flowers/mayflower.png","birth_flowers/junflower.png","birth_flowers/julyflower.png","birth_flowers/augflower.png","birth_flowers/septflower.png","birth_flowers/octflower.png","birth_flowers/novflower.png","birth_flowers/decflower.png"] },
        { name:"Birth Stone", templates:["birth_stone/janstone.png","birth_stone/febstone.png","birth_stone/marstone.png","birth_stone/aprstone.png","birth_stone/maystone.png"] },
        { name:"Creature",    templates:["creatures/dragon.png"] },
        { name:"Greek Myth",  templates:["picture.png", "picture.png"]}
    ];

    // Build library category buttons.
    libraries.forEach(lib => {
        // Create category box and button.
        const box = document.createElement("div");
        box.classList.add("library-box");
        const btn = document.createElement("button");
        btn.textContent = lib.name;
        box.appendChild(btn);
        libraryContainer.appendChild(box);

        box.addEventListener("click", () => {
            // Remove selected class from all categories.
            document.querySelectorAll(".library-box").forEach(b => b.classList.remove("selected"));
            // Highlight clicked category.
            box.classList.add("selected");

            // Clear existing templates only.
            templateBrowser.innerHTML = "";

            // Populate new template thumbnails.
            lib.templates.forEach(src => {
                // Create thumbnail box and button.
                const thumbBox = document.createElement("div");
                thumbBox.classList.add("template-box");
                const tbtn = document.createElement("button");
                tbtn.classList.add("template-button");
                const img = document.createElement("img");
                img.src = src;
                img.alt = "Template Preview";
                tbtn.appendChild(img);
                thumbBox.appendChild(tbtn);
                templateBrowser.appendChild(thumbBox);

                // Show chosen template in overlay slot.
                tbtn.addEventListener("click", () => {
                    overlayImage.innerHTML = "";
                    const chosen = document.createElement("img");
                    chosen.src = src;
                    chosen.alt = "Overlay Icon";
                    overlayImage.appendChild(chosen);
                });
            });
        });
    });
});
