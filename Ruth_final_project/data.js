$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {

      item: [
             {
                 Q: "How do I place an order?",
                 A: "You can place your order by clicking ADD TO CART on the product page >> click checkout >> fill the shipping and billing address >> click place order"
             },
             {
                Q: "How do I pay?",
                A: "You can pay by PayPal, debit/credit card, all major cards are accepted. Paying online is safe and secure with our system.Contact us for wire transfer and other payment options"
              },
              {
                 Q: "How do I know my size?",
                 A: "Even though most of the dresses can be made free size, you can check the size guide on our website or you can get measured and send us your measurement."
               },

              {
                Q: "Is the dress comes with netela/shawl?",
                A: "All the dresses come with big or small netela/shawl."
              },

              {
                Q: "Are the dresses come with netela/shawl?",
                A: "All the dresses come with big or small netela/shawl."
              },
              {
            Q: "How long does custom made take?",
            A: "Processing time is from 1-5 weeks depends on the type of cloth you will order. Please check the product description for an estimated date."
          },

          {
            Q: "Is the jewelry real gold?",
            A: "The jewelry we sell is not real gold, its gold plated or silver plated. Shipping is free and it will take from 12 days to 60 days depends on where you are located. If you order the jewelry with a dress it will be shipped separately and delivery time is different. Clothes delivery times is PROCESSING TIME + 3 to 4 business days. Jewelry shipping to the USA it will take 12-22 days, to Canada it will take 15-60 days."
          },

          {
            Q: "Currency?",
            A: "The website default currency is in US dollar, automatically converted to your local currency on site."
          },

          {
            Q: "How do I contact you?",
            A: "You can email or call us through:"
          },
          {
            Q: "Email:",
            A: "info@habeshapparel.com"
          },
          {
            Q: "Telephone:",
            A: "  +3012436788 \ +8667032020 "
          },
          {
            Q: "You can reach us through:",
            A: "Viber, IMO, WhatsApp, Telegram"
          }

         ]


     })
     $("#target").html(rendered);
 });
