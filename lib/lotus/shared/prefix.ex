defmodule Lotus.Shared.Prefix do
  @moduledoc """
  Helper functions for converting to uk- classes
  """

  @doc """
  Appends prefix to classes.

  ## Examples

      iex> Lotus.Shared.Prefix.prefixed("", "primary")
      "uk-primary"

      iex> Lotus.Shared.Prefix.prefixed("button", "small")
      "uk-button-small"

  """
  @spec prefixed(String.t(), String.t()) :: String.t()
  def prefixed("", rest) do
    "uk-#{rest}"
  end

  def prefixed(prefix, rest) do
    "uk-#{prefix}-#{rest}"
  end
end
