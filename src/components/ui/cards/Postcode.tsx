import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';

import { Button } from '@components/ui/Button';
import { Icon } from '@components/ui/Icon';
import { Tooltip } from '@components/ui/Tooltip';
import { AirportLocation } from '@constants';
import { PostcodeDetails } from '@shared/types';

type Props = {
	details: PostcodeDetails;
	onRemove?: (postcode: string) => void;
};

export const PostcodeCard = ({ details, onRemove }: Props) => {
	return (
		<Disclosure as="div" className="flex flex-col gap-1">
			{({ open }) => (
				<>
					<Disclosure.Button className="flex w-full items-center justify-between gap-4 rounded-md bg-white bg-white px-4 py-2 shadow focus:outline-none dark:bg-zinc-800">
						<section className="inline-flex items-center gap-2">
							<Icon className="h-8 w-8 text-teal-500" name="location" />

							<div className="flex flex-col gap-0 text-left">
								<h3 className="flex items-center gap-2 text-base font-bold">
									{details.postcode}{' '}
									{!details.address && (
										<Tooltip
											className="text-center"
											containerClassName="rounded-full p-1 bg-amber-600 inline-flex items-center justify-center"
											tooltip={
												"Sorry, but we can't get more details about this postcode"
											}
										>
											<Icon
												className="text-amber-100"
												name="warning"
												size="xs"
											/>
										</Tooltip>
									)}
								</h3>
								{details.address && (
									<p className="text-sm text-zinc-500 dark:text-zinc-300">
										{details.address?.road}, {details.address?.state}
									</p>
								)}
							</div>
						</section>

						<Icon
							name="chevron-down"
							size="md"
							className={clsx([
								'text-zinc-400 dark:text-zinc-100',
								{ 'rotate-180 transform': open }
							])}
						/>
					</Disclosure.Button>
					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<Disclosure.Panel className="rounded bg-white p-4 text-base shadow dark:bg-zinc-800">
							<section className="flex flex-col gap-2">
								<h4 className="border-b border-b-zinc-200 text-xs font-medium uppercase text-zinc-400">
									Base Details
								</h4>
								<ul className="text-light text-sm text-zinc-500 dark:text-zinc-300">
									<li className="flex flex-col align-middle md:flex-row">
										<strong className="flex-shrink-0">
											<Icon
												className="mr-1 inline flex-shrink-0 text-teal-600 dark:text-teal-300"
												name="pin"
												size="sm"
											/>
											Full name:
										</strong>{' '}
										<Tooltip
											containerClassName="ml-1"
											tooltip={
												<p className="text-center">
													<strong>Note:</strong> the full name is
													retrieved from a second <strong>API</strong> to
													get all the details using the coordinates
													retrieved from <code>postcodes.io</code>{' '}
													<strong>API</strong>.
												</p>
											}
										>
											<span className="break-words">{details.name}</span>
										</Tooltip>
									</li>
									<li className="flex items-center gap-1">
										<Icon
											className="text-teal-600 dark:text-teal-300"
											name="pin"
											size="sm"
										/>
										<strong>Postcode:</strong> {details.postcode}
									</li>
									<li className="flex items-center gap-1">
										<Icon
											className="text-teal-600 dark:text-teal-300"
											name="pin"
											size="sm"
										/>
										<span>
											<strong>
												Coordinates <small>(lat.; lon.)</small>:
											</strong>{' '}
											{details.coordinates.lat}; {details.coordinates.lon}
										</span>
									</li>
								</ul>
							</section>

							<section className="mt-4 flex flex-col gap-2">
								<div className="borber-b-zinc-200 flex items-center gap-2 border-b pb-1 text-xs font-medium uppercase text-zinc-400">
									<h4 className="">Distance</h4>

									<Tooltip
										tooltip={
											<div className="flex flex-col items-center justify-center gap-1 text-center">
												<p>
													<strong>Note:</strong> the distance is
													calculated from the postcode location to{' '}
													<strong>London Heathrow airport</strong>
												</p>
												<p className="text-xs">
													({AirportLocation.lat}; {AirportLocation.lon})
												</p>
											</div>
										}
									>
										<Icon name="info" size="md" />
									</Tooltip>
								</div>
								<ul className="text-light text-sm text-zinc-500 dark:text-zinc-300">
									<li className="flex items-center gap-1">
										<Icon
											className="text-teal-600 dark:text-teal-300"
											name="ruler"
											size="sm"
										/>
										<strong>In KM:</strong> {details.distance.km}{' '}
										<sup>(KM)</sup>
									</li>
									<li className="flex items-center gap-1">
										<Icon
											className="text-teal-600 dark:text-teal-300"
											name="ruler"
											size="sm"
										/>
										<span>
											<strong>In Miles:</strong> {details.distance.miles}{' '}
											<sup>(MI)</sup>
										</span>
									</li>
								</ul>
							</section>

							{onRemove && (
								<section className="mt-4 text-right">
									<Button
										onClick={() => onRemove(details.postcode)}
										prefixIcon={<Icon name="clean" size="md" />}
										type="button"
										variant="danger"
									>
										Remove
									</Button>
								</section>
							)}
						</Disclosure.Panel>
					</Transition>
				</>
			)}
		</Disclosure>
	);
};
