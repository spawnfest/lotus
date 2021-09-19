defmodule Lotus.AccordionTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_accordion

  alias Lotus.Accordion

  test "Creates a Accordion" do
    html =
      render_surface do
        ~F"""
        <Accordion>Hello</Accordion>
        """
      end

    assert html =~ """
           <div class="uk-accordion">
             Hello
           </div>
           """
  end
end
