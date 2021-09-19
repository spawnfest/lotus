defmodule Lotus.CardTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_card

  alias Lotus.Card

  test "Creates a Card" do
    html =
      render_surface do
        ~F"""
        <Card>Hello</Card>
        """
      end

    assert html =~ """
           <div class="uk-card">
             Hello
           </div>
           """
  end
end
