defmodule Lotus.AccordionItemTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_accordion_item

  alias Lotus.AccordionItem

  test "Creates a AccordionItem" do
    html =
      render_surface do
        ~F"""
        <AccordionItem>Hello</AccordionItem>
        """
      end

    assert html =~ """
           <div class="uk-accordion_item">
             Hello
           </div>
           """
  end
end
