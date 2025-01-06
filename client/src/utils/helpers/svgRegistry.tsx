import { ReactComponent as BillDue } from "@/assets/images/icon-bill-due.svg";
import { ReactComponent as BillPaid } from "@/assets/images/icon-bill-paid.svg";
import { ReactComponent as CaretDown } from "@/assets/images/icon-caret-down.svg";
import { ReactComponent as CaretLeft } from "@/assets/images/icon-caret-left.svg";
import { ReactComponent as CaretRight } from "@/assets/images/icon-caret-right.svg";
import { ReactComponent as CloseModal } from "@/assets/images/icon-close-modal.svg";
import { ReactComponent as Ellipsis } from "@/assets/images/icon-ellipsis.svg";
import { ReactComponent as FilterMobile } from "@/assets/images/icon-filter-mobile.svg";
import { ReactComponent as HidePassword } from "@/assets/images/icon-hide-password.svg";
import { ReactComponent as MinimizeMenu } from "@/assets/images/icon-minimize-menu.svg";
import { ReactComponent as NavBudget } from "@/assets/images/icon-nav-budgets.svg";
import { ReactComponent as NavOverview } from "@/assets/images/icon-nav-overview.svg";
import { ReactComponent as NavPots } from "@/assets/images/icon-nav-pots.svg";
import { ReactComponent as NavRecurringBills } from "@/assets/images/icon-nav-recurring-bills.svg";
import { ReactComponent as NavTransactions } from "@/assets/images/icon-nav-transactions.svg";
import { ReactComponent as Pot } from "@/assets/images/icon-pot.svg";
import { ReactComponent as RecurringBills } from "@/assets/images/icon-recurring-bills.svg";
import { ReactComponent as Search } from "@/assets/images/icon-search.svg";
import { ReactComponent as Selected } from "@/assets/images/icon-selected.svg";
import { ReactComponent as ShowPassword } from "@/assets/images/icon-show-password.svg";
import { ReactComponent as SortMobile } from "@/assets/images/icon-sort-mobile.svg";
import { ReactComponent as IllustrationAuthentication } from "@/assets/images/illustration-authentication.svg";

const svgIcons: Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>
> = {
  billDue: BillDue,
  billPaid: BillPaid,
  caretDown: CaretDown,
  caretLeft: CaretLeft,
  caretRight: CaretRight,
  closeModal: CloseModal,
  ellipsis: Ellipsis,
  filterMobile: FilterMobile,
  hidePassword: HidePassword,
  minimizeMenu: MinimizeMenu,
  navBudget: NavBudget,
  navOverview: NavOverview,
  navPots: NavPots,
  navRecurringBills: NavRecurringBills,
  navTransactions: NavTransactions,
  pot: Pot,
  recurringBills: RecurringBills,
  search: Search,
  selected: Selected,
  showPassword: ShowPassword,
  sortMobile: SortMobile,
  illustrationAuthentication: IllustrationAuthentication,
};

export default svgIcons;
