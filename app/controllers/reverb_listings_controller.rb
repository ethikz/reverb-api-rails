class ReverbListingsController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    reverb_response = HTTParty.get('https://reverb.com/api/listings/all?query=bass&per_page=200')

    reverb_json = ActiveSupport::JSON.decode(reverb_response)

    reverb_json.each do |listing|
      @reverb_listing = listing
    end
  end
end