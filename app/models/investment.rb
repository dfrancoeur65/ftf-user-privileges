class Investment < ApplicationRecord
  belongs_to :user
  belongs_to :offering
  enum status: %i[not_received received invested cancelled refunded]
end
