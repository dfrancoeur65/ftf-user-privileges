class Investment < ApplicationRecord
  belongs_to :user
  has_one :offering
end
