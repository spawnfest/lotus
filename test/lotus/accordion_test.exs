defmodule Lotus.AccordionTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_accordion

  alias Lotus.Accordion

  test "Creates a Accordion" do
    html =
      render_surface do
        ~F"""
        <Accordion id="10">Hello</Accordion>
        """
      end

    assert html =~ """
           <ul phx-hook="Lotus.Accordion#Accordion" id="10">
             Hello
           </ul>
           """
  end
end
