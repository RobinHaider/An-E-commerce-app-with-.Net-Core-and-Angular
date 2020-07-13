using System;
using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specification
{
    public class OrderWithItemsAndOrderingSpecipication : BaseSpecipication<Order>
    {
        public OrderWithItemsAndOrderingSpecipication(string email) : base(o => o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
            AddOrderByDescending(o => o.OrderDate);
        }

        public OrderWithItemsAndOrderingSpecipication(int id, string email) : base(o => o.Id == id && o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
        }
    }
}