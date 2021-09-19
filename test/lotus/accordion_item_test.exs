defmodule Lotus.AccordionItemTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_accordion_item

  alias Lotus.AccordionItem

  test "Creates a AccordionItem" do
    html =
      render_surface do
        ~F"""
        <AccordionItem title="1">Hello</AccordionItem>
        """
      end

    assert html =~ """
           <li>
             <a class="uk-accordion-title" href="#">1</a>
             <div class="uk-accordion-content">
               Hello
             </div>
           </li>
           """
  end
end
